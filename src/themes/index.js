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
        font-family: "PingFang SC", "Microsoft YaHei", -apple-system, BlinkMacSystemFont, sans-serif;
        max-width: 800px;
        margin: 20px auto;
        padding: 40px;
        background: #ffffff;
        border-radius: 16px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        position: relative;
        overflow: hidden;
      }
      
      .markdown-card.reading::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100px;
        height: 100px;
        background: linear-gradient(135deg, rgba(255, 156, 74, 0.1) 0%, rgba(255, 156, 74, 0) 100%);
        border-radius: 0 0 0 100%;
      }
      
      .markdown-card.reading .content {
        color: #333333;
        line-height: 1.8;
        font-size: 16px;
      }
      
      .markdown-card.reading h1 {
        color: #333333;
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 30px;
        padding-bottom: 15px;
        border-bottom: 2px solid #f0f0f0;
        position: relative;
      }
      
      .markdown-card.reading h1::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 80px;
        height: 2px;
        background: #ff9c4a;
      }
      
      .markdown-card.reading h2 {
        color: #333333;
        font-size: 22px;
        font-weight: 600;
        margin-top: 35px;
        margin-bottom: 20px;
        padding-left: 15px;
        border-left: 4px solid #ff9c4a;
      }
      
      .markdown-card.reading h3 {
        color: #444444;
        font-size: 18px;
        font-weight: 600;
        margin-top: 25px;
        margin-bottom: 15px;
      }
      
      .markdown-card.reading ul, .markdown-card.reading ol {
        padding-left: 20px;
        margin-bottom: 20px;
      }
      
      .markdown-card.reading li {
        margin-bottom: 10px;
        position: relative;
        line-height: 1.6;
      }
      
      .markdown-card.reading ul li::before {
        content: '';
        position: absolute;
        left: -20px;
        top: 8px;
        width: 6px;
        height: 6px;
        background: #ff9c4a;
        border-radius: 50%;
      }
      
      .markdown-card.reading ol {
        counter-reset: item;
      }
      
      .markdown-card.reading ol li {
        counter-increment: item;
      }
      
      .markdown-card.reading ol li::before {
        content: counter(item) ".";
        color: #ff9c4a;
        font-weight: 600;
        position: absolute;
        left: -20px;
      }
      
      .markdown-card.reading code {
        background: #f8f9fa;
        padding: 2px 6px;
        border-radius: 4px;
        font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: 14px;
        color: #ff9c4a;
      }
      
      .markdown-card.reading pre {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 8px;
        overflow-x: auto;
        margin: 20px 0;
      }
      
      .markdown-card.reading a {
        color: #ff9c4a;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: border-color 0.3s;
      }
      
      .markdown-card.reading a:hover {
        border-bottom-color: #ff9c4a;
      }
      
      .markdown-card.reading blockquote {
        margin: 20px 0;
        padding: 15px 20px;
        background: #fff9f5;
        border-left: 4px solid #ff9c4a;
        border-radius: 0 8px 8px 0;
      }
      
      .markdown-card.reading blockquote p {
        margin: 0;
        color: #666666;
      }
      
      .markdown-card.reading strong {
        color: #333333;
        font-weight: 600;
      }
      
      .markdown-card.reading table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      .markdown-card.reading th, .markdown-card.reading td {
        padding: 12px;
        border: 1px solid #f0f0f0;
      }
      
      .markdown-card.reading th {
        background: #fff9f5;
        font-weight: 600;
        color: #333333;
      }
      
      .markdown-card.reading tr:nth-child(even) {
        background: #fafafa;
      }
      
      .markdown-card.reading hr {
        border: none;
        height: 1px;
        background: #f0f0f0;
        margin: 30px 0;
      }
      
      @media (max-width: 768px) {
        .markdown-card.reading {
          padding: 20px;
          margin: 10px;
        }
        
        .markdown-card.reading h1 {
          font-size: 24px;
        }
        
        .markdown-card.reading h2 {
          font-size: 20px;
        }
        
        .markdown-card.reading h3 {
          font-size: 16px;
        }
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