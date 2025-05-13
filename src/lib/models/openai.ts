import { ChatOpenAI } from "@langchain/openai";
import { ModelProviderConfig } from "./types";

export const openaiModelProvider: ModelProviderConfig = {
  id: "gpt4o",
  name: "GPT-4o",
  provider: "OpenAI",
  modelName: "gpt-4o-mini-2024-07-18",
  langchainClass: ChatOpenAI,
  apiKeyEnv: "OPENAI_API_KEY",
  tokenCosts: {
    input: 0.0006, // $0.60 per 1M input tokens = $0.0006 per 1K tokens
    output: 0.0024, // $2.40 per 1M output tokens = $0.0024 per 1K tokens
  },
  tokensPerChar: 0.25,
};
