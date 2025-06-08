const themes = {
  default: {
    name: 'default',
    styles: `
      .markdown-card.default {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        max-width: 800px;
        margin: 20px auto;
        padding: 30px;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
      }
      
      .markdown-card.default .content {
        color: #333;
        line-height: 1.6;
      }
      
      .markdown-card.default h1 {
        color: #2c3e50;
        border-bottom: 2px solid #eee;
        padding-bottom: 10px;
      }
      
      .markdown-card.default h2, .markdown-card.default h3 {
        color: #34495e;
        margin-top: 24px;
      }
      
      .markdown-card.default code {
        background: #f8f9fa;
        padding: 2px 5px;
        border-radius: 3px;
        font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
      }
      
      .markdown-card.default pre {
        background: #f8f9fa;
        padding: 15px;
        border-radius: 5px;
        overflow-x: auto;
      }
      
      .markdown-card.default a {
        color: #3498db;
        text-decoration: none;
      }
      
      .markdown-card.default a:hover {
        text-decoration: underline;
      }
      
      .markdown-card.default blockquote {
        border-left: 4px solid #3498db;
        margin: 0;
        padding-left: 20px;
        color: #666;
      }
    `
  },
  
  dark: {
    name: 'dark',
    styles: `
      .markdown-card.dark {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        max-width: 800px;
        margin: 20px auto;
        padding: 30px;
        background: #1a1a1a;
        border-radius: 8px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
      }
      
      .markdown-card.dark .content {
        color: #e0e0e0;
        line-height: 1.6;
      }
      
      .markdown-card.dark h1 {
        color: #ffffff;
        border-bottom: 2px solid #333;
        padding-bottom: 10px;
      }
      
      .markdown-card.dark h2, .markdown-card.dark h3 {
        color: #ffffff;
        margin-top: 24px;
      }
      
      .markdown-card.dark code {
        background: #2d2d2d;
        padding: 2px 5px;
        border-radius: 3px;
        font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
        color: #e0e0e0;
      }
      
      .markdown-card.dark pre {
        background: #2d2d2d;
        padding: 15px;
        border-radius: 5px;
        overflow-x: auto;
      }
      
      .markdown-card.dark a {
        color: #61afef;
        text-decoration: none;
      }
      
      .markdown-card.dark a:hover {
        text-decoration: underline;
      }
      
      .markdown-card.dark blockquote {
        border-left: 4px solid #61afef;
        margin: 0;
        padding-left: 20px;
        color: #888;
      }
    `
  },
  
  vintage: {
    name: 'vintage',
    styles: `
      .markdown-card.vintage {
        font-family: 'Georgia', serif;
        max-width: 800px;
        margin: 20px auto;
        padding: 30px;
        background: #f9f3e6;
        border-radius: 8px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        border: 1px solid #d3c5a9;
      }
      
      .markdown-card.vintage .content {
        color: #5c4b37;
        line-height: 1.8;
      }
      
      .markdown-card.vintage h1 {
        color: #8b4513;
        border-bottom: 2px solid #d3c5a9;
        padding-bottom: 10px;
        font-family: 'Playfair Display', Georgia, serif;
      }
      
      .markdown-card.vintage h2, .markdown-card.vintage h3 {
        color: #8b4513;
        margin-top: 24px;
        font-family: 'Playfair Display', Georgia, serif;
      }
      
      .markdown-card.vintage code {
        background: #f3e8d6;
        padding: 2px 5px;
        border-radius: 3px;
        font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
        color: #8b4513;
      }
      
      .markdown-card.vintage pre {
        background: #f3e8d6;
        padding: 15px;
        border-radius: 5px;
        overflow-x: auto;
      }
      
      .markdown-card.vintage a {
        color: #8b4513;
        text-decoration: none;
        border-bottom: 1px dotted #8b4513;
      }
      
      .markdown-card.vintage a:hover {
        border-bottom-style: solid;
      }
      
      .markdown-card.vintage blockquote {
        border-left: 4px solid #d3c5a9;
        margin: 0;
        padding-left: 20px;
        color: #8b6b4f;
        font-style: italic;
      }
    `
  },
  
  modern: {
    name: 'modern',
    styles: `
      .markdown-card.modern {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        max-width: 800px;
        margin: 20px auto;
        padding: 40px;
        background: #ffffff;
        border-radius: 16px;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
      }
      
      .markdown-card.modern .content {
        color: #1a1a1a;
        line-height: 1.7;
      }
      
      .markdown-card.modern h1 {
        color: #000;
        font-weight: 800;
        letter-spacing: -0.03em;
        border-bottom: none;
        padding-bottom: 0;
      }
      
      .markdown-card.modern h2, .markdown-card.modern h3 {
        color: #000;
        font-weight: 700;
        letter-spacing: -0.02em;
        margin-top: 32px;
      }
      
      .markdown-card.modern code {
        background: #f5f5f5;
        padding: 3px 6px;
        border-radius: 4px;
        font-family: 'JetBrains Mono', 'SFMono-Regular', Consolas, monospace;
        font-size: 0.9em;
      }
      
      .markdown-card.modern pre {
        background: #f5f5f5;
        padding: 20px;
        border-radius: 8px;
        overflow-x: auto;
      }
      
      .markdown-card.modern a {
        color: #0066ff;
        text-decoration: none;
        font-weight: 500;
      }
      
      .markdown-card.modern a:hover {
        text-decoration: underline;
      }
      
      .markdown-card.modern blockquote {
        border-left: 4px solid #0066ff;
        margin: 0;
        padding: 16px 0 16px 20px;
        color: #4d4d4d;
        background: #f8f9fa;
        border-radius: 0 8px 8px 0;
      }
    `
  },
  
  reading: {
    name: 'reading',
    styles: `
      .markdown-card.reading {
        font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
        max-width: 800px;
        margin: 20px auto;
        padding: 40px;
        background: #ffffff;
        border-radius: 16px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        border: 1px solid #e8e8e8;
        line-height: 2;
        position: relative;
        overflow: hidden;
      }
      
      .markdown-card.reading:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 150px;
        height: 150px;
        background: linear-gradient(135deg, #f8f9fa 25%, transparent 25%);
        z-index: 1;
      }

      .markdown-card.reading:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100px;
        height: 100px;
        background: linear-gradient(45deg, #f4a46011 25%, transparent 25%);
        z-index: 1;
      }
      
      .markdown-card.reading .content {
        color: #333;
        position: relative;
        z-index: 2;
      }

      /* 标题样式 */
      .markdown-card.reading h1 {
        color: #fff;
        background: linear-gradient(135deg, #f4a460 0%, #e67e22 100%);
        padding: 12px 25px;
        border-radius: 8px;
        display: inline-block;
        font-size: 1.5em;
        margin-bottom: 30px;
        position: relative;
        box-shadow: 0 4px 12px rgba(230, 126, 34, 0.2);
      }

      .markdown-card.reading h1:after {
        content: "";
        position: absolute;
        right: -25px;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 2px;
        background: linear-gradient(90deg, #f4a460 0%, transparent 100%);
      }
      
      /* 二级标题样式 */
      .markdown-card.reading h2 {
        color: #2c3e50;
        font-size: 1.3em;
        margin: 25px 0 15px;
        padding-left: 25px;
        position: relative;
        display: flex;
        align-items: center;
      }

      .markdown-card.reading h2:before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
        width: 12px;
        height: 12px;
        background: linear-gradient(135deg, #4682b4 0%, #5ca0d3 100%);
        border-radius: 3px;
        box-shadow: 0 2px 6px rgba(70, 130, 180, 0.2);
      }

      /* 三级标题样式 */
      .markdown-card.reading h3 {
        color: #34495e;
        font-size: 1.1em;
        margin: 20px 0 10px;
        padding-left: 45px;
        position: relative;
        display: flex;
        align-items: center;
      }

      .markdown-card.reading h3:before {
        content: "";
        position: absolute;
        left: 25px;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        background: linear-gradient(135deg, #4682b4 0%, #5ca0d3 100%);
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(70, 130, 180, 0.15);
      }

      /* 列表样式 */
      .markdown-card.reading ul {
        list-style: none;
        padding-left: 65px;
        margin: 10px 0;
        position: relative;
      }

      .markdown-card.reading ul:before {
        content: "";
        position: absolute;
        left: 45px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: linear-gradient(180deg, #e8e8e8 0%, #f4f4f4 100%);
      }

      .markdown-card.reading ul li {
        position: relative;
        margin: 12px 0;
        padding-left: 20px;
        transition: all 0.3s ease;
      }

      .markdown-card.reading ul li:hover {
        transform: translateX(5px);
      }

      .markdown-card.reading ul li:before {
        content: "";
        position: absolute;
        left: -22px;
        top: 50%;
        transform: translateY(-50%);
        width: 6px;
        height: 6px;
        background: linear-gradient(135deg, #4682b4 0%, #5ca0d3 100%);
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(70, 130, 180, 0.15);
      }

      .markdown-card.reading ul li:after {
        content: "";
        position: absolute;
        left: -20px;
        top: 50%;
        width: 20px;
        height: 2px;
        background: linear-gradient(90deg, #e8e8e8 0%, #f4f4f4 100%);
      }

      /* 引用样式 */
      .markdown-card.reading blockquote {
        background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        border-left: 4px solid #f4a460;
        margin: 20px 45px;
        padding: 15px 25px;
        color: #666;
        border-radius: 0 8px 8px 0;
        position: relative;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      }

      .markdown-card.reading blockquote:before {
        content: "";
        position: absolute;
        left: -20px;
        top: 50%;
        width: 16px;
        height: 2px;
        background: linear-gradient(90deg, #f4a460 0%, transparent 100%);
      }

      /* 分隔线样式 */
      .markdown-card.reading hr {
        border: none;
        height: 2px;
        background: repeating-linear-gradient(90deg, 
          #e8e8e8 0px, #e8e8e8 4px, 
          transparent 4px, transparent 8px
        );
        margin: 35px 25px;
        position: relative;
      }

      .markdown-card.reading hr:before,
      .markdown-card.reading hr:after {
        content: "";
        position: absolute;
        width: 6px;
        height: 6px;
        background: #e8e8e8;
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
      }

      .markdown-card.reading hr:before {
        left: -5px;
      }

      .markdown-card.reading hr:after {
        right: -5px;
      }

      /* 段落样式 */
      .markdown-card.reading p {
        padding-left: 45px;
        position: relative;
        margin: 15px 0;
        transition: all 0.3s ease;
      }

      .markdown-card.reading p:hover {
        transform: translateX(5px);
      }

      /* 连接线和装饰 */
      .markdown-card.reading h2 + ul,
      .markdown-card.reading h3 + ul {
        position: relative;
      }

      .markdown-card.reading h2 + ul:before,
      .markdown-card.reading h3 + ul:before {
        content: "";
        position: absolute;
        left: 30px;
        top: -15px;
        width: 2px;
        height: calc(100% + 15px);
        background: linear-gradient(180deg, #e8e8e8 0%, #f4f4f4 100%);
      }

      /* 代码块样式 */
      .markdown-card.reading pre {
        margin-left: 45px;
        background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        padding: 20px;
        border-radius: 8px;
        border: 1px solid #eee;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        position: relative;
        overflow-x: auto;
      }

      .markdown-card.reading pre:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #4682b4 0%, #5ca0d3 100%);
        border-radius: 4px 4px 0 0;
        opacity: 0.5;
      }

      .markdown-card.reading code {
        font-family: 'JetBrains Mono', 'SFMono-Regular', Consolas, monospace;
        font-size: 0.9em;
        color: #e67e22;
      }

      /* 链接样式 */
      .markdown-card.reading a {
        color: #4682b4;
        text-decoration: none;
        border-bottom: 1px dashed #4682b4;
        transition: all 0.3s ease;
        padding: 0 2px;
      }

      .markdown-card.reading a:hover {
        border-bottom-style: solid;
        background: rgba(70, 130, 180, 0.1);
        border-radius: 2px;
      }

      /* 添加页面装饰 */
      .markdown-card.reading:before {
        content: "";
        position: absolute;
        top: -10px;
        right: -10px;
        width: 20px;
        height: 20px;
        background: #f4a460;
        opacity: 0.1;
        border-radius: 50%;
      }

      /* 添加悬停效果 */
      .markdown-card.reading h2,
      .markdown-card.reading h3,
      .markdown-card.reading blockquote,
      .markdown-card.reading pre {
        transition: all 0.3s ease;
      }

      .markdown-card.reading h2:hover,
      .markdown-card.reading h3:hover {
        transform: translateX(5px);
      }

      .markdown-card.reading blockquote:hover,
      .markdown-card.reading pre:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      }
    `
  }
};

/**
 * Get a theme by name
 * @param {string} themeName - The name of the theme to retrieve
 * @returns {object} The theme object containing styles
 */
function getTheme(themeName) {
  if (!themes[themeName]) {
    console.warn(`Theme '${themeName}' not found, falling back to default theme`);
    return themes.default;
  }
  return themes[themeName];
}

module.exports = {
  getTheme,
  themes
}; 