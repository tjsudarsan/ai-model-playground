import { BaseChatModel } from "@langchain/core/language_models/chat_models";
import { ModelId, ModelOptions } from "./types";
import { openaiModelProvider } from "./openai";
import { anthropicModelProvider } from "./anthropic";
import { xaiModelProvider } from "./xai";
import {
  createModelInstance,
  estimateTokens as estimateTokensUtil,
  calculateCost as calculateCostUtil,
} from "./utils";

// Export all model providers
export const modelProviders = {
  gpt4o: openaiModelProvider,
  claude: anthropicModelProvider,
  xai: xaiModelProvider,
};

// Re-export types
export * from "./types";
export { createModelInstance } from "./utils";

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
  return estimateTokensUtil(text, modelId, modelProviders);
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
  return calculateCostUtil(
    promptTokens,
    completionTokens,
    modelId,
    modelProviders
  );
};
