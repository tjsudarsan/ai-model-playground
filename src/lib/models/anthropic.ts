import { ChatAnthropic } from "@langchain/anthropic";
import { ModelProviderConfig } from "./types";

export const anthropicModelProvider: ModelProviderConfig = {
  id: "claude",
  name: "Claude 3.7 Sonnet",
  provider: "Anthropic",
  modelName: "claude-3-7-sonnet-20250219",
  langchainClass: ChatAnthropic,
  apiKeyEnv: "ANTHROPIC_API_KEY",
  tokenCosts: {
    input: 0.003, // $3 per 1M input tokens = $0.003 per 1K tokens
    output: 0.015, // $15 per 1M output tokens = $0.015 per 1K tokens
  },
  tokensPerChar: 0.25,
};
