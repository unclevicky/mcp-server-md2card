import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONFIG_PATH = path.join(__dirname, '../../.mcp-config');

class LLMService {
  constructor() {
    this.config = null;
  }

  async init() {
    try {
      const configData = await fs.readFile(CONFIG_PATH, 'utf-8');
      this.config = JSON.parse(configData);
      
      if (!this.config.llm?.api?.url || !this.config.llm?.api?.key || !this.config.llm?.api?.model) {
        throw new Error('LLM configuration is incomplete');
      }
    } catch (error) {
      console.error('Failed to initialize LLM service:', error);
      throw error;
    }
  }

  async generateCompletion(prompt) {
    if (!this.config) {
      await this.init();
    }

    const { url, key, model } = this.config.llm.api;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${key}`
        },
        body: JSON.stringify({
          model: model,
          messages: [
            {
              role: "user",
              content: prompt
            }
          ],
          temperature: 0.7,
          max_tokens: 2000
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Failed to generate completion:', error);
      throw error;
    }
  }
}

export const llmService = new LLMService(); 