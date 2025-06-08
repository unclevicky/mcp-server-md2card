# MCP Server - Markdown Card Producer

一个强大的 Markdown 转卡片工具，支持 AI 生成读书笔记、多主题转换和图片导出。基于 Model Context Protocol (MCP) 标准实现。

## 功能特点

- 🤖 AI 驱动的读书笔记生成
- 🎨 多主题支持（默认、深色、复古、现代、阅读）
- 📷 高质量图片导出
- 🚀 标准 MCP 协议实现
- 🛠 Cursor MCP 工具集成

## 项目结构

```
mcp-server-md2card/
├── src/                  # 源代码目录
│   ├── index.mjs         # 服务器入口文件
│   ├── mcpServer.mjs     # MCP服务器实现
│   └── services/         # 服务模块
│       ├── converter.mjs     # Markdown转换服务
│       ├── imageExporter.mjs # 图片导出服务
│       └── noteGenerator.mjs # 笔记生成服务
├── public/               # 静态资源目录
│   └── index.html        # 测试页面
├── .cursor/              # Cursor配置目录
│   └── mcp.json          # MCP工具配置
├── .mcp-config           # 项目配置文件（替代.env）
├── package.json          # 项目依赖
└── README.md             # 项目文档
```

## 快速开始

1. 安装依赖：
```bash
npm install
```

2. 配置项目：
检查 `.mcp-config` 文件并根据需要修改配置：
```json
{
    "server": {
        "port": 3001,
        "host": "localhost"
    },
    "llm": {
        "api": {
            "url": "https://api.example.com",
            "key": "your-api-key",
            "model": "model-name"
        }
    }
}
```

3. 启动服务器：
```bash
npm start
```

4. 访问测试页面：
打开浏览器访问 http://localhost:3001

## MCP 工具使用

本项目实现了标准的 Model Context Protocol (MCP)，可以作为 Cursor 编辑器的工具使用。

### 可用工具

1. **generate-notes** - 生成读书笔记并转换为卡片
   - 参数：
     - `bookName` (必填): 书籍名称
     - `theme` (可选): 卡片主题，可选值: "default", "dark", "vintage", "modern", "reading"，默认为 "reading"
     - `exportImage` (可选): 是否导出为图片，默认为 false

2. **convert** - 将 Markdown 转换为卡片
   - 参数：
     - `markdown` (必填): Markdown 内容
     - `theme` (可选): 卡片主题，可选值同上，默认为 "reading"
     - `exportImage` (可选): 是否导出为图片，默认为 false

3. **export-image** - 将 HTML 导出为图片
   - 参数：
     - `html` (必填): HTML 内容
     - `options` (可选): 导出选项对象
       - `width`: 图片宽度，默认为 800
       - `height`: 图片高度，默认为 1200
       - `scale`: 缩放比例，默认为 2
       - `transparent`: 是否使用透明背景，默认为 false

4. **get-themes** - 获取可用主题列表
   - 无参数

### 在 Cursor 中配置

服务器启动后会自动在 `.cursor/mcp.json` 中生成配置文件，Cursor 编辑器会自动检测并加载此配置。

## 技术实现

- 使用 Express.js 构建 Web 服务器
- 使用 @modelcontextprotocol/sdk 实现 MCP 协议
- 使用 StreamableHTTP 传输协议，支持会话管理
- 使用 Puppeteer 实现 HTML 到图片的转换
- 使用 Marked 和 Highlight.js 实现 Markdown 转 HTML

## 故障排除

如果遇到问题，请检查：

1. 确保端口 3001 未被占用
2. 检查 `.mcp-config` 文件中的配置是否正确
3. 确保已安装所有依赖 (`npm install`)
4. 检查 Cursor 编辑器是否正确加载了 MCP 工具

## 许可证

MIT 