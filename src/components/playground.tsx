"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { History, Send, Plus } from "lucide-react";
import HistoryDrawer from "./history-drawer";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { MessageEditor } from "./message-editor";
import { ParametersPopover } from "./parameters-popover";
import { ModelResponsePanel } from "./model-response-panel";
import { generateId } from "./utils";
import {
  models,
  Message,
  ModelResponse,
  ModelParameters,
  HistoryItem,
  ApiResponse,
} from "./types";

export default function Playground() {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "system", content: "You are a helpful assistant." },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [responses, setResponses] = useState<Record<string, ModelResponse>>({});
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [parameters, setParameters] = useState<ModelParameters>({
    temperature: 0.7,
    maxTokens: null,
    topP: 1.0,
    frequencyPenalty: 0.0,
    presencePenalty: 0.0,
  });

  // Fetch history on component mount
  useEffect(() => {
    fetchHistory();
  }, []);

  // Fetch history from API
  const fetchHistory = async () => {
    try {
      const response = await fetch("/api/history");
      if (!response.ok) throw new Error("Failed to fetch history");

      const data = await response.json();
      setHistory(data);
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };

  // Add a new message
  const addMessage = (role: "system" | "user" | "assistant" = "user") => {
    const newMessage: Message = {
      id: generateId(),
      role,
      content: "",
    };
    setMessages([...messages, newMessage]);
  };

  // Update a message
  const updateMessage = (id: string, content: string) => {
    setMessages(
      messages.map((msg) => (msg.id === id ? { ...msg, content } : msg))
    );
  };

  // Change message role
  const changeMessageRole = (
    id: string,
    role: "system" | "user" | "assistant"
  ) => {
    setMessages(
      messages.map((msg) => (msg.id === id ? { ...msg, role } : msg))
    );
  };

  // Delete a message
  const deleteMessage = (id: string) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  // Send messages to the API
  const handleSendPrompt = async () => {
    if (messages.length === 0) return;

    // Reset responses and set loading state
    setResponses({});

    // Initialize loading state for all models
    const initialResponses: Record<string, ModelResponse> = {};
    models.forEach((model) => {
      initialResponses[model.id] = {
        loading: true,
        text: "",
        metrics: null,
      };
    });
    setResponses(initialResponses);
    setIsLoading(true);

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

      setResponses(newResponses);
      setIsLoading(false);

      // Refresh history to include the new entry
      fetchHistory();
    } catch (error) {
      console.error("Error sending prompt:", error);
      setIsLoading(false);

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
      setResponses(errorResponses);
    }
  };

  // Load a history item into the playground
  const loadFromHistory = (historyItem: HistoryItem) => {
    if (historyItem.messages && historyItem.messages.length > 0) {
      // Convert DB messages to our Message format
      const loadedMessages = historyItem.messages.map((msg) => ({
        id: generateId(),
        role: msg.role as "system" | "user" | "assistant",
        content: msg.content,
      }));
      setMessages(loadedMessages);
    } else {
      // Fallback for older history items
      setMessages([
        { id: generateId(), role: "user", content: historyItem.prompt },
      ]);
    }

    // Load parameters if available
    if (historyItem.parameters) {
      setParameters(historyItem.parameters);
    }

    const historyResponses: Record<string, ModelResponse> = {};
    historyItem.responses.forEach((response) => {
      historyResponses[response.modelId] = {
        loading: false,
        text: response.text,
        metrics: response.metrics,
      };
    });

    setResponses(historyResponses);
    setIsDrawerOpen(false);
  };

  // Clear all history
  const clearHistory = async () => {
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
      setHistory([]);
      setIsDrawerOpen(false);
    } catch (error) {
      console.error("Error clearing history:", error);
    }
  };

  return (
    <div className="w-full p-4 h-[calc(100vh-2rem)]">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Prompt Playground</h1>
      </div>

      <ResizablePanelGroup
        direction="horizontal"
        className="h-[calc(100vh-5rem)] rounded-lg border"
      >
        {/* Left panel - Messages and Parameters */}
        <ResizablePanel defaultSize={40} minSize={30}>
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b p-4">
              <div className="text-lg font-medium">Prompt Messages</div>
              <div className="flex gap-2">
                <ParametersPopover
                  parameters={parameters}
                  onParametersChange={setParameters}
                />

                <Drawer
                  open={isDrawerOpen}
                  onOpenChange={setIsDrawerOpen}
                  direction="right"
                >
                  <DrawerTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <History className="h-4 w-4" />
                      History
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <HistoryDrawer
                      history={history}
                      onSelectHistory={loadFromHistory}
                      onClearHistory={clearHistory}
                    />
                  </DrawerContent>
                </Drawer>
              </div>
            </div>

            <div className="flex-1 overflow-auto p-4">
              <div className="flex flex-col space-y-4">
                {messages.map((message) => (
                  <MessageEditor
                    key={message.id}
                    message={message}
                    onUpdateMessage={updateMessage}
                    onChangeRole={changeMessageRole}
                    onDeleteMessage={deleteMessage}
                  />
                ))}
              </div>
            </div>

            <div className="border-t p-4">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addMessage()}
                    className="h-8"
                  >
                    <Plus className="h-3 w-3 mr-1" /> Add Message
                  </Button>
                </div>
                <Button
                  className="w-full"
                  onClick={handleSendPrompt}
                  disabled={
                    isLoading || messages.every((m) => !m.content.trim())
                  }
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isLoading ? "Generating..." : "Generate"}
                </Button>
              </div>
            </div>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Right panel - Model Responses */}
        <ResizablePanel defaultSize={60}>
          <ResizablePanelGroup direction="vertical">
            {models.map((model, index) => (
              <React.Fragment key={model.id}>
                {index > 0 && <ResizableHandle withHandle />}
                <ResizablePanel defaultSize={100 / models.length}>
                  <ModelResponsePanel
                    model={model}
                    response={responses[model.id]}
                  />
                </ResizablePanel>
              </React.Fragment>
            ))}
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
