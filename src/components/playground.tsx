"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Progress } from "./ui/progress";
import { Clock, History, Send } from "lucide-react";
import HistoryDrawer, { HistoryItem, Metrics } from "./history-drawer";

// Model type definition
type Model = {
  id: string;
  name: string;
  provider: string;
  color: string;
};

// Response type
type ModelResponse = {
  loading: boolean;
  text: string;
  metrics: Metrics | null;
};

// API response type
type ApiResponse = {
  historyId: string;
  models: {
    id: string;
    name: string;
    provider: string;
    response: string | null;
    error: string | null;
    metrics: Metrics | null;
  }[];
};

// Model definitions
const models: Model[] = [
  { id: "gpt4o", name: "GPT-4o", provider: "OpenAI", color: "blue" },
  {
    id: "claude",
    name: "Claude 3.7 Sonnet",
    provider: "Anthropic",
    color: "amber",
  },
  { id: "xai", name: "XAI Grok", provider: "XAI", color: "violet" },
];

export default function Playground() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [responses, setResponses] = useState<Record<string, ModelResponse>>({});
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

  // Send prompt to the API
  const handleSendPrompt = async () => {
    if (!prompt.trim()) return;

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
        body: JSON.stringify({ prompt }),
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
    setPrompt(historyItem.prompt);

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
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">AI Model Playground</h1>
          <Drawer
            open={isDrawerOpen}
            onOpenChange={setIsDrawerOpen}
            direction="right"
          >
            <DrawerTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
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

        <div className="flex flex-col space-y-2">
          <textarea
            placeholder="Enter your prompt here..."
            className="min-h-28 text-base w-full p-2 border rounded-md resize-y"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={isLoading}
          />
          <div className="flex justify-end space-x-2">
            <Button
              onClick={handleSendPrompt}
              disabled={!prompt.trim() || isLoading}
              className="flex items-center gap-2"
            >
              <Send className="h-4 w-4" />
              {isLoading ? "Generating..." : "Generate"}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {models.map((model) => (
            <Card key={model.id} className="overflow-hidden">
              <CardHeader className={`bg-${model.color}-50 border-b`}>
                <CardTitle>{model.name}</CardTitle>
                <CardDescription>{model.provider}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 h-80 overflow-y-auto">
                {responses[model.id]?.loading ? (
                  <div className="flex flex-col items-center justify-center h-full space-y-2">
                    <Progress value={45} className="w-full" />
                    <p className="text-sm text-muted-foreground">
                      Generating response...
                    </p>
                  </div>
                ) : responses[model.id]?.text ? (
                  <div className="whitespace-pre-wrap">
                    {responses[model.id].text}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    Response will appear here
                  </div>
                )}
              </CardContent>
              {responses[model.id]?.metrics && (
                <CardFooter className="bg-muted/50 p-3 text-xs flex flex-col space-y-1">
                  <div className="flex justify-between w-full">
                    <span>Tokens:</span>
                    <span>
                      {responses[model.id].metrics?.promptTokens} +{" "}
                      {responses[model.id].metrics?.completionTokens} ={" "}
                      {responses[model.id].metrics?.totalTokens}
                    </span>
                  </div>
                  <div className="flex justify-between w-full">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Response time:
                    </span>
                    <span>
                      {responses[model.id].metrics?.responseTime.toFixed(2)}s
                    </span>
                  </div>
                  <div className="flex justify-between w-full">
                    <span>Est. cost:</span>
                    <span>
                      ${responses[model.id].metrics?.estimatedCost.toFixed(6)}
                    </span>
                  </div>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
