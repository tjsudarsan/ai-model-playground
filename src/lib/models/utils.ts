import { BaseChatModel } from "@langchain/core/language_models/chat_models";
import { ModelId, ModelOptions, ModelProviderConfig } from "./types";

/**
 * Creates a properly configured model instance based on the provider
 */
export const createModelInstance = (
  modelConfig: ModelProviderConfig,
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
    return new modelConfig.langchainClass({
      ...modelOptions,
      modelName: modelConfig.modelName,
    });
  } else if (provider === "Anthropic") {
    return new modelConfig.langchainClass({
      ...modelOptions,
      modelName: modelConfig.modelName,
    });
  } else {
    // XAI
    return new modelConfig.langchainClass({
      ...modelOptions,
      model: modelConfig.modelName,
    });
  }
};

/**
 * Estimate the number of tokens in a text for a specific model
 * @param text The text to estimate tokens for
 * @param modelId The model ID to use for estimation
 * @param providers Object containing model providers
 * @returns Estimated token count
 */
export const estimateTokens = (
  text: string,
  modelId: ModelId,
  providers: Record<ModelId, ModelProviderConfig>
): number => {
  const modelConfig = providers[modelId];

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
 * @param providers Object containing model providers
 * @returns Calculated cost in dollars
 */
export const calculateCost = (
  promptTokens: number,
  completionTokens: number,
  modelId: ModelId,
  providers: Record<ModelId, ModelProviderConfig>
): number => {
  const modelConfig = providers[modelId];

  if (!modelConfig) {
    throw new Error(`Model with ID "${modelId}" not found`);
  }

  const inputCost = (promptTokens / 1000) * modelConfig.tokenCosts.input;
  const outputCost = (completionTokens / 1000) * modelConfig.tokenCosts.output;

  return inputCost + outputCost;
};
