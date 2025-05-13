import { ChatXAI } from "@langchain/xai";
import { ModelProviderConfig } from "./types";

export const xaiModelProvider: ModelProviderConfig = {
  id: "xai",
  name: "XAI Grok",
  provider: "XAI",
  modelName: "grok-3-mini-fast-beta",
  langchainClass: ChatXAI,
  apiKeyEnv: "XAI_API_KEY",
  tokenCosts: {
    input: 0.0006, // $0.60 per 1M input tokens = $0.0006 per 1K tokens
    output: 0.004, // $4.00 per 1M output tokens = $0.004 per 1K tokens
  },
  tokensPerChar: 0.25,
};
