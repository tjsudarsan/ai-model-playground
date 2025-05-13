import { ChatOpenAI } from "@langchain/openai";
import { ChatAnthropic } from "@langchain/anthropic";
import { ChatXAI } from "@langchain/xai";
import { BaseChatModel } from "@langchain/core/language_models/chat_models";

// Consolidated model definitions with all details in one place
export const modelProviders = {
  gpt4o: {
    id: "gpt4o",
    name: "GPT-4o",
    provider: "OpenAI",
    modelName: "gpt-4o-mini-2024-07-18",
    langchainClass: ChatOpenAI,
    apiKeyEnv: "OPENAI_API_KEY",
    tokenCosts: {
      input: 0.00005, // $0.05 per 1K input tokens
      output: 0.00015, // $0.15 per 1K output tokens
    },
    tokensPerChar: 0.25,
  },
  claude: {
    id: "claude",
    name: "Claude 3.7 Sonnet",
    provider: "Anthropic",
    modelName: "claude-3-7-sonnet-20250219",
    langchainClass: ChatAnthropic,
    apiKeyEnv: "ANTHROPIC_API_KEY",
    tokenCosts: {
      input: 0.00003, // $0.03 per 1K input tokens
      output: 0.00015, // $0.15 per 1K output tokens
    },
    tokensPerChar: 0.25,
  },
  xai: {
    id: "xai",
    name: "XAI Grok",
    provider: "XAI",
    modelName: "grok-3-mini-fast-beta",
    langchainClass: ChatXAI,
    apiKeyEnv: "XAI_API_KEY",
    tokenCosts: {
      input: 0.00001, // $0.01 per 1K input tokens
      output: 0.00001, // $0.01 per 1K output tokens
    },
    tokensPerChar: 0.25,
  },
};

export type ModelId = keyof typeof modelProviders;

// Basic interface for common model options
export interface ModelOptions {
  temperature?: number;
  streaming?: boolean;
  apiKey?: string;
  [key: string]: string | number | boolean | undefined;
}

/**
 * Creates a properly configured model instance based on the provider
 */
const createModelInstance = (
  modelConfig: (typeof modelProviders)[ModelId],
  options: ModelOptions
): BaseChatModel => {
  const provider = modelConfig.provider;

  // Common configuration
  const modelOptions = {
    temperature: options.temperature ?? 0.7,
    streaming: options.streaming ?? true,
    apiKey: options.apiKey || process.env[modelConfig.apiKeyEnv],
  };

  // Handle provider-specific configuration
  if (provider === "OpenAI") {
    return new ChatOpenAI({
      ...modelOptions,
      modelName: modelConfig.modelName,
    });
  } else if (provider === "Anthropic") {
    return new ChatAnthropic({
      ...modelOptions,
      modelName: modelConfig.modelName,
    });
  } else {
    // XAI
    return new ChatXAI({
      ...modelOptions,
      model: modelConfig.modelName,
    });
  }
};

/**
 * Get a specific model instance with provided configuration
 * @param modelId The ID of the model to use
 * @param options Configuration options for the model
 * @returns A configured model instance
 */
export const getModel = (
  modelId: ModelId,
  options: ModelOptions = {}
): BaseChatModel => {
  const modelConfig = modelProviders[modelId];

  if (!modelConfig) {
    throw new Error(`Model with ID "${modelId}" not found`);
  }

  return createModelInstance(modelConfig, options);
};

/**
 * Estimate the number of tokens in a text for a specific model
 * @param text The text to estimate tokens for
 * @param modelId The model ID to use for estimation
 * @returns Estimated token count
 */
export const estimateTokens = (text: string, modelId: ModelId): number => {
  const modelConfig = modelProviders[modelId];

  if (!modelConfig) {
    throw new Error(`Model with ID "${modelId}" not found`);
  }

  return Math.ceil(text.length * modelConfig.tokensPerChar);
};

/**
 * Calculate the cost of a model request
 * @param promptTokens Number of tokens in the prompt
 * @param completionTokens Number of tokens in the completion
 * @param modelId The ID of the model used
 * @returns Calculated cost in dollars
 */
export const calculateCost = (
  promptTokens: number,
  completionTokens: number,
  modelId: ModelId
): number => {
  const modelConfig = modelProviders[modelId];

  if (!modelConfig) {
    throw new Error(`Model with ID "${modelId}" not found`);
  }

  const inputCost = (promptTokens / 1000) * modelConfig.tokenCosts.input;
  const outputCost = (completionTokens / 1000) * modelConfig.tokenCosts.output;

  return inputCost + outputCost;
};
