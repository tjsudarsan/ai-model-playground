"use client";

import React from "react";
import { Skeleton } from "../atoms/skeleton";
import { Model, ModelResponse } from "../../types/ui.types";
import { cn } from "@/utils/ui";

interface ModelResponsePanelProps {
  model: Model;
  response: ModelResponse | undefined;
}

export function ModelResponsePanel({
  model,
  response,
}: ModelResponsePanelProps) {
  // Get header background color - kept locally in the component as requested
  const getHeaderBgColor = (color: string): string => {
    switch (color) {
      case "blue":
        return "bg-blue-500/20";
      case "amber":
        return "bg-amber-500/20";
      case "violet":
        return "bg-violet-500/20";
      default:
        return "bg-gray-500/20";
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div
        className={cn(
          "p-3 border-b flex justify-between items-center",
          getHeaderBgColor(model.color)
        )}
      >
        <div className="flex items-center gap-2">
          <div>
            <h3 className="font-medium">{model.name}</h3>
            <p className="text-xs text-muted-foreground">{model.provider}</p>
          </div>
        </div>
        {response?.metrics && (
          <div className="text-xs flex gap-3">
            <div>
              <span className="text-muted-foreground">Tokens:</span>{" "}
              {response.metrics?.promptTokens} +{" "}
              {response.metrics?.completionTokens} ={" "}
              {response.metrics?.totalTokens}
            </div>
            <div>
              <span className="text-muted-foreground">Time:</span>{" "}
              {response.metrics?.responseTime.toFixed(2)}s
            </div>
            <div>
              <span className="text-muted-foreground">Cost:</span> $
              {response.metrics?.estimatedCost.toFixed(6)}
            </div>
          </div>
        )}
      </div>
      <div className="flex-1 overflow-auto p-4">
        {response?.loading ? (
          <div className="flex flex-col items-start h-full space-y-2">
            <Skeleton className="w-[80%] h-4 mb-2" />
            <Skeleton className="w-[90%] h-4 mb-2" />
            <Skeleton className="w-[75%] h-4 mb-2" />
            <Skeleton className="w-[85%] h-4 mb-2" />
            <Skeleton className="w-[60%] h-4" />
          </div>
        ) : response?.text ? (
          <div className="whitespace-pre-wrap">{response.text}</div>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            Response will appear here
          </div>
        )}
      </div>
    </div>
  );
}
