import { IServiceProvider } from './types';

const chatModels = [
  {
    name: 'moonshot-v1-8k',
    contextWindow: 8192,
    maxTokens: 1024,
    inputPrice: 0.012,
    outputPrice: 0.012,
    isDefault: true,
    capabilities: {
      tools: {
        enabled: true,
      },
    },
  },
  {
    name: 'moonshot-v1-32k',
    contextWindow: 32768,
    maxTokens: 1024,
    inputPrice: 0.024,
    outputPrice: 0.024,
    capabilities: {
      tools: {
        enabled: true,
      },
    },
  },
  {
    name: 'moonshot-v1-128k',
    contextWindow: 128000,
    maxTokens: 1024,
    inputPrice: 0.06,
    outputPrice: 0.06,
    capabilities: {
      tools: {
        enabled: true,
      },
    },
  },
];

export default {
  name: 'Moonshot',
  apiBase: 'https://api.moonshot.cn/v1',
  currency: 'CNY',
  options: {
    apiBaseCustomizable: true,
    apiKeyCustomizable: true,
  },
  chat: {
    apiSchema: ['base', 'key', 'model'],
    presencePenalty: { min: -2, max: 2, default: 0 },
    topP: { min: 0, max: 1, default: 1 },
    temperature: { min: 0, max: 1, default: 0.3 },
    options: {
      modelCustomizable: true,
    },
    models: chatModels,
  },
} as IServiceProvider;
