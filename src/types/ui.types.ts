export type Model = {
  id: string;
  name: string;
  provider: string;
  color: string;
};

export type ModelResponse = {
  loading: boolean;
  text: string;
  metrics: Metrics | null;
};

export type Message = {
  id: string;
  role: "system" | "user" | "assistant";
  content: string;
};

export type ModelParameters = {
  temperature: number;
  maxTokens: number | null;
  topP: number;
  frequencyPenalty: number;
  presencePenalty: number;
};

export type ApiResponse = {
  historyId: string;
  models: {
    id: string;
    name: string;
    provider: string;
    response: string | null;
    error: string | null;
    metrics: Metrics | null;
  }[];
};

export type Metrics = {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  responseTime: number;
  estimatedCost: number;
};

export type PromptMessage = {
  role: string;
  content: string;
  order: number;
};

export type HistoryItem = {
  id: string;
  prompt: string;
  messages?: PromptMessage[];
  parameters?: ModelParameters;
  responses: {
    modelId: string;
    text: string;
    metrics: Metrics | null;
  }[];
  timestamp: string;
};

// Define the models array once to use across components
export const models: Model[] = [
  {
    id: "gpt4o",
    name: "GPT-4o mini",
    provider: "OpenAI",
    color: "blue",
  },
  {
    id: "claude",
    name: "Claude 3.7 Sonnet",
    provider: "Anthropic",
    color: "amber",
  },
  {
    id: "xai",
    name: "Grok 3 mini fast",
    provider: "xAI",
    color: "violet",
  },
];
