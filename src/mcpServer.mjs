// 实现简单的JSON-RPC 2.0服务器
import { marked } from 'marked';
import highlight from 'highlight.js';
import puppeteer from 'puppeteer';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { convertMarkdown } from './services/converter.mjs';
import { exportToImage } from './services/imageExporter.mjs';
import { notesService } from './services/notes.mjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { z } from 'zod';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 创建缓存目录
const cacheDir = path.join(__dirname, '../.cache');
if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir, { recursive: true });
}

// 缓存文件路径
const CACHE_PATHS = {
  markdown: path.join(cacheDir, 'last_markdown.md'),
  html: path.join(cacheDir, 'last_html.html')
};

// 保存内容到缓存
function saveToCache(type, content) {
  fs.writeFileSync(CACHE_PATHS[type], content, 'utf8');
}

// 从缓存读取内容
function loadFromCache(type) {
  if (fs.existsSync(CACHE_PATHS[type])) {
    return fs.readFileSync(CACHE_PATHS[type], 'utf8');
  }
  return null;
}

/**
 * 创建MCP服务器
 * @returns {McpServer} MCP服务器实例
 */
export function createMcpServer() {
  // 创建MCP服务器实例
  const server = new McpServer({
    name: "md2card",
    version: "1.0.0",
    description: "将Markdown转换为精美卡片"
  });

  // 注册工具: 生成读书笔记
  server.tool(
    "generate-notes",
    {
      bookName: z.string().describe("书籍名称"),
      theme: z.enum(["default", "dark", "vintage", "modern", "reading"]).default("reading").describe("卡片主题"),
      exportImage: z.boolean().default(false).describe("是否导出为图片"),
      template: z.string().default("default").describe("笔记模板")
    },
    async ({ bookName, theme = 'reading', exportImage = false, template = 'default' }) => {
      try {
        // 使用 notesService 生成笔记内容
        const markdown = await notesService.generateNotes(bookName, template);
        
        // 保存 Markdown 到缓存
        saveToCache('markdown', markdown);

        const html = await convertMarkdown(markdown, theme);
        
        // 保存 HTML 到缓存
        saveToCache('html', html);
        
        // 如果需要导出图片
        if (exportImage) {
          const imageResult = await exportToImage(html, {
            scale: 2,
            transparent: false
          });

          if (!imageResult.success) {
            return {
              content: [{ type: "text", text: `导出图片错误: ${imageResult.error}` }],
              isError: true
            };
          }

          return {
            content: [
              { type: "text", text: `已生成读书笔记并导出为图片，主题: ${theme}，模板: ${template}` }
            ]
          };
        }

        return {
          content: [
            { type: "text", text: `已生成读书笔记，主题: ${theme}，模板: ${template}` }
          ]
        };
      } catch (error) {
        console.error('生成笔记失败:', error);
        return {
          content: [{ type: "text", text: `生成笔记失败: ${error.message}` }],
          isError: true
        };
      }
    }
  );

  // 注册工具: 转换Markdown
  server.tool(
    "convert",
    {
      markdown: z.string().optional().describe("Markdown 内容"),
      theme: z.enum(["default", "dark", "vintage", "modern", "reading"]).default("reading").describe("卡片主题"),
      exportImage: z.boolean().default(false).describe("是否导出为图片")
    },
    async ({ markdown, theme = 'reading', exportImage = false }) => {
      try {
        // 如果没有提供 markdown，尝试从缓存加载
        if (!markdown) {
          markdown = loadFromCache('markdown');
          if (!markdown) {
            return {
              content: [{ type: "text", text: "错误: 未提供 Markdown 内容，且缓存中没有找到上一次的内容" }],
              isError: true
            };
          }
        }

        const html = await convertMarkdown(markdown, theme);

        // 保存 HTML 到缓存
        saveToCache('html', html);

        // 如果需要导出图片
        if (exportImage) {
          const imageResult = await exportToImage(html, {
            scale: 2,
            transparent: false
          });

          if (!imageResult.success) {
            return {
              content: [{ type: "text", text: `导出图片错误: ${imageResult.error}` }],
              isError: true
            };
          }

          return {
            content: [
              { type: "text", text: `已转换Markdown并导出为图片，主题: ${theme}` }
            ]
          };
        }

        return {
          content: [
            { type: "text", text: `已转换Markdown，主题: ${theme}` }
          ]
        };
      } catch (error) {
        console.error('转换失败:', error);
        return {
          content: [{ type: "text", text: `转换失败: ${error.message}` }],
          isError: true
        };
      }
    }
  );

  // 注册工具: 导出图片
  server.tool(
    "export-image",
    {
      html: z.string().optional().describe("HTML 内容"),
      options: z.object({
        width: z.number().default(800).describe("图片宽度"),
        height: z.number().default(1200).describe("图片高度"),
        scale: z.number().default(2).describe("缩放比例"),
        transparent: z.boolean().default(false).describe("是否使用透明背景")
      }).optional().describe("导出选项")
    },
    async ({ html, options = {} }) => {
      try {
        // 如果没有提供 html，尝试从缓存加载
        if (!html) {
          html = loadFromCache('html');
          if (!html) {
            return {
              content: [{ type: "text", text: "错误: 未提供 HTML 内容，且缓存中没有找到上一次的内容" }],
              isError: true
            };
          }
        }

        const result = await exportToImage(html, options);

        if (!result.success) {
          return {
            content: [{ type: "text", text: `导出图片错误: ${result.error}` }],
            isError: true
          };
        }

        return {
          content: [
            { type: "text", text: `已成功导出图片` }
          ]
        };
      } catch (error) {
        console.error('导出图片失败:', error);
        return {
          content: [{ type: "text", text: `导出图片失败: ${error.message}` }],
          isError: true
        };
      }
    }
  );

  // 注册工具: 获取主题列表
  server.tool(
    "get-themes",
    {},
    async () => {
      return {
        content: [
          { type: "text", text: `可用主题: default, dark, vintage, modern, reading` }
        ]
      };
    }
  );

  // 注册工具: 获取笔记模板列表
  server.tool(
    "get-templates",
    {
      random_string: z.string().optional().describe("Dummy parameter for no-parameter tools")
    },
    async () => {
      const templates = notesService.getAvailableTemplates();
      const templateList = templates.map(t => `${t.id}: ${t.name} - ${t.description}`).join('\n');
      return {
        content: [
          { type: "text", text: `可用笔记模板:\n${templateList}` }
        ]
      };
    }
  );

  return server;
} 