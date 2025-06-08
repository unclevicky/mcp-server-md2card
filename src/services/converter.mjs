import { marked } from 'marked';
import highlight from 'highlight.js';

// 配置marked
marked.setOptions({
  highlight: function(code, lang) {
    if (lang && highlight.getLanguage(lang)) {
      return highlight.highlight(code, { language: lang }).value;
    }
    return highlight.highlightAuto(code).value;
  },
  breaks: true,
  gfm: true
});

// 主题样式
const themes = {
  default: {
    background: '#ffffff',
    color: '#333333',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    codeBackground: '#f5f5f5',
    blockquoteColor: '#777',
    linkColor: '#0366d6',
    headingColor: '#111',
  },
  dark: {
    background: '#1e1e1e',
    color: '#e0e0e0',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    codeBackground: '#2d2d2d',
    blockquoteColor: '#a0a0a0',
    linkColor: '#58a6ff',
    headingColor: '#ffffff',
  },
  vintage: {
    background: '#f8f3e9',
    color: '#5c4b51',
    fontFamily: 'Georgia, serif',
    fontSize: '17px',
    codeBackground: '#eae3d7',
    blockquoteColor: '#8a7e72',
    linkColor: '#9e7e67',
    headingColor: '#6b4e40',
  },
  modern: {
    background: '#ffffff',
    color: '#24292e',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: '16px',
    codeBackground: '#f6f8fa',
    blockquoteColor: '#6a737d',
    linkColor: '#0366d6',
    headingColor: '#05a',
  },
  reading: {
    background: '#f9f7f1',
    color: '#333333',
    fontFamily: 'Georgia, serif',
    fontSize: '18px',
    codeBackground: '#f0ece3',
    blockquoteColor: '#777777',
    linkColor: '#1a73e8',
    headingColor: '#333333',
  }
};

/**
 * 将Markdown转换为HTML
 * @param {string} markdown - Markdown内容
 * @param {string} themeName - 主题名称
 * @returns {Promise<string>} HTML内容
 */
export const convertMarkdown = async (markdown, themeName = 'default') => {
  try {
    // 获取主题
    const theme = themes[themeName] || themes.default;
    
    // 转换markdown为HTML
    const htmlContent = marked.parse(markdown);
    
    // 构建完整的HTML页面
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Markdown Card</title>
        <style>
          body {
            background-color: ${theme.background};
            color: ${theme.color};
            font-family: ${theme.fontFamily};
            font-size: ${theme.fontSize};
            line-height: 1.6;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
          }
          
          h1, h2, h3, h4, h5, h6 {
            color: ${theme.headingColor};
            margin-top: 24px;
            margin-bottom: 16px;
            font-weight: 600;
            line-height: 1.25;
          }
          
          h1 {
            font-size: 2em;
            border-bottom: 1px solid #eaecef;
            padding-bottom: .3em;
          }
          
          h2 {
            font-size: 1.5em;
            border-bottom: 1px solid #eaecef;
            padding-bottom: .3em;
          }
          
          a {
            color: ${theme.linkColor};
            text-decoration: none;
          }
          
          a:hover {
            text-decoration: underline;
          }
          
          code {
            font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
            background-color: ${theme.codeBackground};
            padding: 0.2em 0.4em;
            border-radius: 3px;
            font-size: 85%;
          }
          
          pre {
            background-color: ${theme.codeBackground};
            border-radius: 3px;
            padding: 16px;
            overflow: auto;
          }
          
          pre code {
            background-color: transparent;
            padding: 0;
          }
          
          blockquote {
            color: ${theme.blockquoteColor};
            border-left: 4px solid #dfe2e5;
            padding-left: 1em;
            margin-left: 0;
          }
          
          img {
            max-width: 100%;
            height: auto;
          }
          
          table {
            border-collapse: collapse;
            width: 100%;
            margin-bottom: 16px;
          }
          
          table th, table td {
            padding: 6px 13px;
            border: 1px solid #dfe2e5;
          }
          
          table th {
            background-color: ${theme.codeBackground};
            font-weight: 600;
          }
          
          hr {
            height: 0.25em;
            padding: 0;
            margin: 24px 0;
            background-color: #e1e4e8;
            border: 0;
          }
          
          .card-container {
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            overflow: hidden;
            background-color: ${theme.background};
            padding: 30px;
          }
        </style>
      </head>
      <body>
        <div class="card-container">
          ${htmlContent}
        </div>
      </body>
      </html>
    `;
    
    return html;
  } catch (error) {
    console.error('转换Markdown失败:', error);
    throw error;
  }
}; 