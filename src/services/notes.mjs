import { getTemplate, listTemplates } from '../prompts/templates.mjs';
import { llmService } from './llm.mjs';

class NotesService {
  constructor() {
    this.templates = null;
  }

  async generateNotes(bookName, templateName = 'default') {
    try {
      const template = getTemplate(templateName);
      const prompt = template.prompt.replace('{bookName}', bookName);
      
      const content = await llmService.generateCompletion(prompt);
      return content;
    } catch (error) {
      console.error('Failed to generate notes:', error);
      throw error;
    }
  }

  getAvailableTemplates() {
    return listTemplates();
  }
}

export const notesService = new NotesService(); 