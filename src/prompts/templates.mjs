export const noteTemplates = {
  default: {
    name: "默认模板",
    description: "生成基础的读书笔记，包含核心概念、主要观点和个人感悟",
    prompt: `请为《{bookName}》生成一份结构清晰的读书笔记，包含以下内容：
1. 核心概念：提炼书中最重要的概念和理论
2. 主要观点：总结作者的关键论述和见解
3. 实践启示：从书中提取可以实际应用的建议
4. 个人感悟：对书籍内容的思考和反思

要求：
- 使用简洁清晰的语言
- 采用结构化的方式组织内容
- 突出重点，便于理解和记忆
- 以Markdown格式输出`
  },
  academic: {
    name: "学术研究模板",
    description: "适合学术著作的深度分析笔记",
    prompt: `请为《{bookName}》生成一份学术性的读书笔记，需要包含：
1. 研究背景：阐述该书的学术背景和研究意义
2. 理论框架：分析书中的核心理论和概念体系
3. 研究方法：总结作者使用的研究方法和工具
4. 主要发现：列举重要的研究发现和结论
5. 学术贡献：评估该书对学术领域的贡献
6. 批评与反思：对研究方法和结论的批判性思考

要求：
- 保持学术严谨性
- 注重逻辑性和系统性
- 突出创新点和局限性
- 以Markdown格式输出`
  },
  practical: {
    name: "实用技能模板",
    description: "适合实用类书籍的操作性笔记",
    prompt: `请为《{bookName}》生成一份实用性的读书笔记，需要包含：
1. 技能概述：简要介绍书中涉及的核心技能
2. 方法步骤：详细列举关键方法和具体步骤
3. 实践要点：总结实践过程中的注意事项
4. 常见问题：预测和解答实践中可能遇到的问题
5. 进阶建议：提供技能提升的建议和路径

要求：
- 注重实操性和可执行性
- 使用清晰的步骤说明
- 提供具体的示例
- 以Markdown格式输出`
  },
  business: {
    name: "商业管理模板",
    description: "适合商业和管理类书籍的分析笔记",
    prompt: `请为《{bookName}》生成一份商业管理类的读书笔记，需要包含：
1. 商业洞见：提炼书中的核心商业见解
2. 管理策略：总结重要的管理方法和策略
3. 案例分析：归纳典型案例及其启示
4. 实施建议：提供落地执行的具体建议
5. 趋势展望：分析相关领域的发展趋势

要求：
- 突出实用性和可操作性
- 结合实际商业环境
- 注重方法论的提炼
- 以Markdown格式输出`
  },
  personal: {
    name: "个人成长模板",
    description: "适合个人提升类书籍的内化笔记",
    prompt: `请为《{bookName}》生成一份个人成长类的读书笔记，需要包含：
1. 核心理念：提炼书中的主要观点和理念
2. 行动方法：总结可以立即采取的行动步骤
3. 习惯养成：归纳需要培养的关键习惯
4. 自我反思：设计反思问题和练习
5. 成长计划：制定个人实践和提升计划

要求：
- 注重个人化和可执行性
- 强调循序渐进的实践
- 包含自我评估的方法
- 以Markdown格式输出`
  }
};

export const getTemplate = (templateName = 'default') => {
  return noteTemplates[templateName] || noteTemplates.default;
};

export const listTemplates = () => {
  return Object.entries(noteTemplates).map(([key, template]) => ({
    id: key,
    name: template.name,
    description: template.description
  }));
}; 