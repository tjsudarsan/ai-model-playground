import { BaseCallbackHandler } from "@langchain/core/callbacks/base";

export interface StreamCallbacks {
  onStart?: () => void;
  onToken: (token: string) => void;
  onComplete?: (fullText: string) => void;
  onError?: (error: Error) => void;
}

/**
 * Callback handler for streaming tokens from LangChain
 */
export class StreamingCallbackHandler extends BaseCallbackHandler {
  name = "streaming_callback_handler";
  fullText = "";

  constructor(private callbacks: StreamCallbacks) {
    super();
  }

  handleLLMStart() {
    this.fullText = "";
    if (this.callbacks.onStart) {
      this.callbacks.onStart();
    }
  }

  handleLLMNewToken(token: string) {
    this.fullText += token;
    this.callbacks.onToken(token);
  }

  handleLLMEnd() {
    if (this.callbacks.onComplete) {
      this.callbacks.onComplete(this.fullText);
    }
  }

  handleLLMError(error: Error) {
    if (this.callbacks.onError) {
      this.callbacks.onError(error);
    }
  }
}

/**
 * Creates a human message from a user prompt
 */
export const createPromptMessages = (prompt: string) => {
  return [{ role: "user", content: prompt }];
};
