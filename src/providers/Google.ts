import { IServiceProvider } from './types';

const chatModels = [
  {
    name: 'gemini-2.5-pro-exp-03-25',
    label: 'gemini-2.5-pro-exp',
    contextWindow: 1000000,
    maxTokens: 64000,
    defaultMaxTokens: 32000,
    inputPrice: 0.0001,
    outputPrice: 0.0004,
    capabilities: {
      tools: {
        enabled: true,
      },
      json: {
        enabled: true,
      },
      vision: {
        enabled: true,
        allowBase64: true,
        allowUrl: true,
      },
    },
    description: `Google's our most advanced coding model yet and is state-of-the-art across a range of benchmarks requiring enhanced reasoning.`,
  },
  {
    name: 'gemini-2.0-flash-001',
    label: 'gemini-2.0-flash',
    contextWindow: 1048576,
    maxTokens: 8192,
    defaultMaxTokens: 8000,
    inputPrice: 0.0001,
    outputPrice: 0.0004,
    capabilities: {
      tools: {
        enabled: true,
      },
      json: {
        enabled: true,
      },
      vision: {
        enabled: true,
        allowBase64: true,
        allowUrl: true,
      },
    },
    description: `Next generation features, superior speed, native tool use, and multimodal generation`,
  },
  {
    name: 'gemini-2.0-pro-exp-02-05',
    label: 'gemini-2.0-pro-exp-02-05',
    contextWindow: 1048576,
    maxTokens: 8192,
    defaultMaxTokens: 8000,
    inputPrice: 0.0001,
    outputPrice: 0.0004,
    capabilities: {
      tools: {
        enabled: true,
      },
      json: {
        enabled: true,
      },
      vision: {
        enabled: true,
        allowBase64: true,
        allowUrl: true,
      },
    },
    description: `The quality has improved, especially for world knowledge, code, and long contexts.`,
  },
  {
    name: 'gemini-2.0-flash-thinking-exp',
    contextWindow: 1048576,
    maxTokens: 8192,
    defaultMaxTokens: 8000,
    inputPrice: 0.0001,
    outputPrice: 0.0004,
    capabilities: {
      json: {
        enabled: true,
      },
      vision: {
        enabled: true,
        allowBase64: true,
        allowUrl: true,
      },
    },
    description: `Capable of reasoning about complex problems and possessing new thinking abilities`,
  },
  {
    name: 'gemini-2.0-flash-lite-preview-02-05',
    label: 'gemini-2.0-flash-lite',
    contextWindow: 1048576,
    maxTokens: 8192,
    defaultMaxTokens: 8000,
    inputPrice: 0.000075,
    outputPrice: 0.0003,
    isDefault: true,
    capabilities: {
      tools: {
        enabled: true,
      },
      json: {
        enabled: true,
      },
      vision: {
        enabled: true,
        allowBase64: true,
        allowUrl: true,
      },
    },
    description: `Quality improvements, celebrate 1 year of Gemini`,
  },
  {
    name: 'gemini-1.5-pro',
    contextWindow: 1048576,
    maxTokens: 8192,
    defaultMaxTokens: 8000,
    inputPrice: 0.00035,
    outputPrice: 0.0105,
    capabilities: {
      tools: {
        enabled: true,
      },
      json: {
        enabled: true,
      },
      vision: {
        enabled: true,
        allowBase64: true,
        allowUrl: true,
      },
    },
    description: `The multi-modal model from Google's Gemini family that balances model performance and speed.`,
  },
  {
    name: 'gemini-1.5-flash',
    contextWindow: 1048576,
    maxTokens: 8192,
    defaultMaxTokens: 8000,
    inputPrice: 0.00035,
    outputPrice: 0.00105,
    capabilities: {
      tools: {
        enabled: true,
      },
      json: {
        enabled: true,
      },
      vision: {
        enabled: true,
        allowBase64: true,
        allowUrl: true,
      },
    },
    description: `Lightweight, fast and cost-efficient while featuring multimodal reasoning and a breakthrough long context window of up to one million tokens.`,
  },
  {
    name: 'gemini-1.5-flash-8b',
    contextWindow: 1048576,
    maxTokens: 8192,
    defaultMaxTokens: 8000,
    inputPrice: 0.0000375,
    outputPrice: 0.00015,
    capabilities: {
      tools: {
        enabled: true,
      },
      json: {
        enabled: true,
      },
      vision: {
        enabled: true,
        allowBase64: true,
        allowUrl: true,
      },
    },
    description: `The Gemini 1.5 Flash-8B is a small model designed for tasks that require less intelligence.`,
  },
];

export default {
  name: 'Google',
  apiBase: 'https://generativelanguage.googleapis.com',
  currency: 'USD',
  options: {
    apiBaseCustomizable: true,
    apiKeyCustomizable: true,
  },
  chat: {
    apiSchema: ['base', 'key', 'model'],
    presencePenalty: { min: -2, max: 2, default: 0 },
    topP: { min: 0, max: 1, default: 1 },
    temperature: { min: 0, max: 1, default: 0.9 },
    options: {
      modelCustomizable: true,
      streamCustomizable: false,
    },
    models: chatModels,
  },
} as IServiceProvider;
