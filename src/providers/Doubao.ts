import { IServiceProvider } from './types';

const chatModels = [
  {
    name: 'doubao-vision-pro-32k',
    contextWindow: 32000,
    maxTokens: 4096,
    defaultMaxTokens: 4000,
    inputPrice: 0.0008,
    outputPrice: 0.002,
    capabilities: {
      vision: {
        enabled: true,
        allowBase64: true,
        allowUrl: true,
      },
    },
  },
  {
    name: 'doubao-pro-256k',
    contextWindow: 256000,
    maxTokens: 4096,
    defaultMaxTokens: 4000,
    inputPrice: 0.005,
    outputPrice: 0.009,
    capabilities: {
      tools: {
        enabled: true,
      },
    },
  },
  {
    name: 'doubao-pro-128k',
    contextWindow: 128000,
    maxTokens: 4096,
    defaultMaxTokens: 4000,
    inputPrice: 0.005,
    outputPrice: 0.009,
    isDefault: true,
    capabilities: {
      tools: {
        enabled: true,
      },
    },
  },
  {
    name: 'doubao-pro-32k',
    contextWindow: 32000,
    maxTokens: 4096,
    defaultMaxTokens: 4000,
    inputPrice: 0.0008,
    outputPrice: 0.002,
    capabilities: {
      tools: {
        enabled: true,
      },
    },
  },
  {
    name: 'doubao-pro-4k',
    contextWindow: 4000,
    maxTokens: 4096,
    defaultMaxTokens: 4000,
    inputPrice: 0.0008,
    outputPrice: 0.002,
    capabilities: {
      tools: {
        enabled: true,
      },
    },
  },
  {
    name: 'doubao-lite-128k',
    contextWindow: 128000,
    defaultMaxTokens: 4000,
    maxTokens: 4096,
    inputPrice: 0.0008,
    outputPrice: 0.001,
    capabilities: {
      tools: {
        enabled: true,
      },
    },
  },
  {
    name: 'doubao-lite-32k',
    contextWindow: 32000,
    maxTokens: 4096,
    defaultMaxTokens: 4000,
    inputPrice: 0.0003,
    outputPrice: 0.0006,
    capabilities: {
      tools: {
        enabled: true,
      },
    },
  },
  {
    name: 'doubao-lite-4k',
    contextWindow: 4000,
    maxTokens: 4096,
    defaultMaxTokens: 4000,
    inputPrice: 0.0003,
    outputPrice: 0.0006,
    capabilities: {
      tools: {
        enabled: true,
      },
    },
  },
];

export default {
  name: 'Doubao',
  apiBase: 'https://ark.cn-beijing.volces.com/api/v3',
  currency: 'CNY',
  options: {
    apiBaseCustomizable: true,
    apiKeyCustomizable: true,
  },
  chat: {
    docs: {
      deploymentId: '接入点名称, 类似 ep-20241101123241-24smv',
      temperature:
        'Higher values will make the output more creative and unpredictable, while lower values will make it more precise.',
      presencePenalty:
        "Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.",
      topP: 'An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with topP probability mass.',
      model: '用于统计用量和控制上下文长度，请选择与部署一致的模型',
    },
    apiSchema: ['base', 'key'],
    modeExtras: ['deploymentId'],
    frequencyPenalty: { min: -2, max: 2, default: 0 },
    topP: { min: 0, max: 1, default: 0.7 },
    presencePenalty: { min: -2, max: 2, default: 0 },
    temperature: { min: 0, max: 1, default: 1 },
    options: {
      modelCustomizable: true,
    },
    models: chatModels,
  },
} as IServiceProvider;
