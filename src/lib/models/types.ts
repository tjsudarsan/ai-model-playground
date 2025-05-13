import { BaseChatModel } from "@langchain/core/language_models/chat_models";

// Model provider type definition
export interface ModelProviderConfig {
  id: string;
  name: string;
  provider: string;
  modelName: string;
  langchainClass: new (config: Record<string, unknown>) => BaseChatModel;
  apiKeyEnv: string;
  tokenCosts: {
    input: number;
    output: number;
  };
  tokensPerChar: number;
}

// Basic interface for common model options
export interface ModelOptions {
  temperature?: number;
  streaming?: boolean;
  apiKey?: string;
  [key: string]: string | number | boolean | undefined;
}

// Export model ID type
export type ModelId = "gpt4o" | "claude" | "xai";
