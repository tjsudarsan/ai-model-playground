import { create } from "zustand";
import { generateId } from "@/utils/uuid";
import {
  Message,
  ModelResponse,
  ModelParameters,
  HistoryItem,
  ApiResponse,
  models,
} from "@/types/ui.types";

interface PlaygroundState {
  messages: Message[];
  isLoading: boolean;
  responses: Record<string, ModelResponse>;
  history: HistoryItem[];
  isDrawerOpen: boolean;
  parameters: ModelParameters;

  // Actions
  setMessages: (messages: Message[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  setResponses: (responses: Record<string, ModelResponse>) => void;
  setHistory: (history: HistoryItem[]) => void;
  setIsDrawerOpen: (isOpen: boolean) => void;
  setParameters: (parameters: ModelParameters) => void;

  // Complex actions
  addMessage: (role?: "system" | "user" | "assistant") => void;
  updateMessage: (id: string, content: string) => void;
  changeMessageRole: (
    id: string,
    role: "system" | "user" | "assistant"
  ) => void;
  deleteMessage: (id: string) => void;
  fetchHistory: () => Promise<void>;
  handleSendPrompt: () => Promise<void>;
  loadFromHistory: (historyItem: HistoryItem) => void;
  clearHistory: () => Promise<void>;
}

export const usePlaygroundStore = create<PlaygroundState>((set, get) => ({
  messages: [
    { id: "1", role: "system", content: "You are a helpful assistant." },
    { id: "2", role: "user", content: "" },
  ],
  isLoading: false,
  responses: {},
  history: [],
  isDrawerOpen: false,
  parameters: {
    temperature: 0.7,
    maxTokens: null,
    topP: 1.0,
    frequencyPenalty: 0.0,
    presencePenalty: 0.0,
  },

  // Simple setters
  setMessages: (messages) => set({ messages }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setResponses: (responses) => set({ responses }),
  setHistory: (history) => set({ history }),
  setIsDrawerOpen: (isDrawerOpen) => set({ isDrawerOpen }),
  setParameters: (parameters) => set({ parameters }),

  // Complex actions
  addMessage: (role = "user") => {
    const newMessage: Message = {
      id: generateId(),
      role,
      content: "",
    };
    set((state) => ({ messages: [...state.messages, newMessage] }));
  },

  updateMessage: (id, content) => {
    set((state) => ({
      messages: state.messages.map((msg) =>
        msg.id === id ? { ...msg, content } : msg
      ),
    }));
  },

  changeMessageRole: (id, role) => {
    set((state) => ({
      messages: state.messages.map((msg) =>
        msg.id === id ? { ...msg, role } : msg
      ),
    }));
  },

  deleteMessage: (id) => {
    set((state) => ({
      messages: state.messages.filter((msg) => msg.id !== id),
    }));
  },

  fetchHistory: async () => {
    try {
      const response = await fetch("/api/history");
      if (!response.ok) throw new Error("Failed to fetch history");

      const data = await response.json();
      set({ history: data });
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  },

  handleSendPrompt: async () => {
    const { messages, parameters } = get();
    if (messages.length === 0) return;

    // Reset responses and set loading state
    set({ responses: {} });

    // Initialize loading state for all models
    const initialResponses: Record<string, ModelResponse> = {};

    models.forEach((model) => {
      initialResponses[model.id] = {
        loading: true,
        text: "",
        metrics: null,
      };
    });

    set({ responses: initialResponses, isLoading: true });

    try {
      // Post to the generate API
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: messages,
          parameters: parameters,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate responses");
      }

      // Parse the JSON response
      const data: ApiResponse = await response.json();

      // Update responses based on API data
      const newResponses: Record<string, ModelResponse> = {};

      data.models.forEach((modelData) => {
        newResponses[modelData.id] = {
          loading: false,
          text: modelData.error || modelData.response || "No response received",
          metrics: modelData.metrics,
        };
      });

      set({ responses: newResponses, isLoading: false });

      // Refresh history to include the new entry
      get().fetchHistory();
    } catch (error) {
      console.error("Error sending prompt:", error);

      // Update all models with the error
      const errorResponses: Record<string, ModelResponse> = {};
      models.forEach((model) => {
        errorResponses[model.id] = {
          loading: false,
          text: `Error: ${
            error instanceof Error ? error.message : "Unknown error"
          }`,
          metrics: null,
        };
      });

      set({ responses: errorResponses, isLoading: false });
    }
  },

  loadFromHistory: (historyItem) => {
    if (historyItem.messages && historyItem.messages.length > 0) {
      // Convert DB messages to our Message format
      const loadedMessages = historyItem.messages.map((msg) => ({
        id: generateId(),
        role: msg.role as "system" | "user" | "assistant",
        content: msg.content,
      }));
      set({ messages: loadedMessages });
    } else {
      // Fallback for older history items
      set({
        messages: [
          { id: generateId(), role: "user", content: historyItem.prompt },
        ],
      });
    }

    // Load parameters if available
    if (historyItem.parameters) {
      set({ parameters: historyItem.parameters });
    }

    const historyResponses: Record<string, ModelResponse> = {};
    historyItem.responses.forEach((response) => {
      historyResponses[response.modelId] = {
        loading: false,
        text: response.text,
        metrics: response.metrics,
      };
    });

    set({ responses: historyResponses, isDrawerOpen: false });
  },

  clearHistory: async () => {
    try {
      const response = await fetch("/api/history", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ clearAll: true }),
      });

      if (!response.ok) throw new Error("Failed to clear history");

      // Refresh history
      set({ history: [], isDrawerOpen: false });
    } catch (error) {
      console.error("Error clearing history:", error);
    }
  },
}));
