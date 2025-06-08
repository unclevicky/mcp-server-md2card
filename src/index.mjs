import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createMcpServer } from './mcpServer.mjs';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { randomUUID } from 'crypto';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 创建或更新MCP配置文件
function updateMcpConfig() {
  try {
    // 创建.cursor目录（如果不存在）
    const cursorDir = path.join(__dirname, '../.cursor');
    if (!fs.existsSync(cursorDir)) {
      fs.mkdirSync(cursorDir);
    }
    
    // 确保.cursor/mcp.json文件存在
    const mcpConfigPath = path.join(cursorDir, 'mcp.json');
    const scriptPath = path.resolve(__dirname, 'index.mjs'); // 使用绝对路径
    const mcpConfig = {
      "mcpServers": {
        "md2card": {
          "name": "md2card",
          "description": "Convert Markdown to beautiful cards",
          "type": "stdio",
          "command": "node",
          "args": [scriptPath, "--stdio"]
        }
      }
    };
    
    fs.writeFileSync(mcpConfigPath, JSON.stringify(mcpConfig, null, 2));
    console.log(`MCP配置文件已创建: ${mcpConfigPath}`);
    console.log(`使用脚本路径: ${scriptPath}`);
  } catch (error) {
    console.error('更新MCP配置文件失败:', error);
  }
}

// 先更新MCP配置
updateMcpConfig();

// 创建MCP服务器
const mcpServer = createMcpServer();

// 检查是否是通过stdio方式启动
const isStdio = process.argv.includes('--stdio') || 
                process.env.MCP_TRANSPORT === 'stdio' ||
                process.stdin.isTTY === false;

if (isStdio) {
  console.error('使用stdio传输启动MCP服务器...');
  const transport = new StdioServerTransport();
  mcpServer.connect(transport).catch(error => {
    console.error('连接MCP服务器失败:', error);
    process.exit(1);
  });
} else {
  // 创建Express应用
  const app = express();
  const PORT = process.env.PORT || 3001;

  // 中间件
  app.use(cors());
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(express.static(path.join(__dirname, '../public')));

  // 存储活跃的传输会话
  const activeTransports = {};

  // 处理MCP请求 - 使用StreamableHTTP传输
  app.all('/mcp', async (req, res) => {
    try {
      console.log('收到MCP请求:', req.method);
      
      // 检查现有会话ID
      const sessionId = req.headers['mcp-session-id'];
      let transport;
      
      if (sessionId && activeTransports[sessionId]) {
        // 重用现有传输
        transport = activeTransports[sessionId];
        console.log(`使用现有会话: ${sessionId}`);
      } else {
        // 创建新的传输实例
        transport = new StreamableHTTPServerTransport({
          sessionIdGenerator: () => randomUUID(),
          onsessioninitialized: (newSessionId) => {
            // 存储传输实例
            activeTransports[newSessionId] = transport;
            console.log(`已创建新会话: ${newSessionId}`);
          }
        });
        
        // 当传输关闭时，清理传输实例
        transport.onclose = () => {
          if (transport.sessionId) {
            delete activeTransports[transport.sessionId];
            console.log(`会话 ${transport.sessionId} 已关闭`);
          }
        };
        
        // 连接到MCP服务器
        await mcpServer.connect(transport);
      }
      
      // 处理请求
      await transport.handleRequest(req, res, req.body);
    } catch (error) {
      console.error('处理MCP请求失败:', error);
      if (!res.headersSent) {
        res.status(500).json({
          jsonrpc: "2.0",
          error: {
            code: -32000,
            message: "Internal error",
            data: error.message
          },
          id: null
        });
      }
    }
  });

  // 健康检查端点
  app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // 测试页面
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // 启动服务器
  app.listen(PORT, () => {
    console.log(`MCP服务器运行在 http://localhost:${PORT}`);
    console.log(`MCP端点: http://localhost:${PORT}/mcp`);
  });
} 