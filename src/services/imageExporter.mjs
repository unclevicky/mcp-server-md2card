import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * 将HTML导出为图片
 * @param {string} html - HTML内容
 * @param {Object} options - 导出选项
 * @param {number} [options.width=800] - 图片宽度
 * @param {number} [options.height=1200] - 图片高度
 * @param {number} [options.scale=2] - 缩放比例
 * @param {boolean} [options.transparent=false] - 是否使用透明背景
 * @returns {Promise<{success: boolean, data?: string, error?: string}>} 结果对象
 */
export async function exportToImage(html, options = {}) {
  // 设置默认选项
  const {
    width = 800,
    height = 1200,
    scale = 2,
    transparent = false
  } = options;
  
  let browser = null;
  
  try {
    // 确保output目录存在
    const outputDir = path.join(__dirname, '../../output');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // 生成输出文件路径
    const outputPath = path.join(outputDir, 'output.png');
    
    // 启动浏览器
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    // 创建新页面
    const page = await browser.newPage();
    
    // 设置视口大小
    await page.setViewport({
      width,
      height,
      deviceScaleFactor: scale
    });

    // 设置内容
    await page.setContent(html, {
      waitUntil: 'networkidle0'
    });

    // 等待页面渲染完成
    await page.evaluate(() => {
      return new Promise(resolve => {
        // 检查图片是否加载完成
        const images = document.querySelectorAll('img');
        if (images.length === 0) {
          resolve();
          return;
        }
        
        let loadedImages = 0;
        const onLoad = () => {
          loadedImages++;
          if (loadedImages === images.length) {
            resolve();
          }
        };
        
        images.forEach(img => {
          if (img.complete) {
            onLoad();
          } else {
            img.addEventListener('load', onLoad);
            img.addEventListener('error', onLoad);
          }
        });
      });
    });

    // 截取屏幕并保存到文件
    await page.screenshot({
      path: outputPath,
      type: 'png',
      fullPage: true,
      omitBackground: transparent
    });

    // 关闭浏览器
    await browser.close();
    browser = null;

    console.log(`图片已保存到: ${outputPath}`);

    // 返回成功信息
    return {
      success: true,
      data: outputPath
    };
  } catch (error) {
    console.error('导出图片失败:', error);
    
    // 确保浏览器关闭
    if (browser) {
      await browser.close();
    }
    
    return {
      success: false,
      error: '导出图片失败: ' + error.message
    };
  }
} 