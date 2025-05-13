"use client";

import React from "react";
import Image from "next/image";
import { Progress } from "./ui/progress";
import { Model, ModelResponse } from "./types";

interface ModelResponsePanelProps {
  model: Model;
  response: ModelResponse | undefined;
}

export function ModelResponsePanel({
  model,
  response,
}: ModelResponsePanelProps) {
  // Get header background color
  const getHeaderBgColor = (color: string) => {
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
        className={`p-3 border-b ${getHeaderBgColor(
          model.color
        )} flex justify-between items-center`}
      >
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 relative">
            <Image
              src={model.logo}
              alt={model.provider}
              fill
              className="object-contain dark:invert"
            />
          </div>
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
          <div className="flex flex-col items-center justify-center h-full space-y-2">
            <Progress value={45} className="w-full" />
            <p className="text-sm text-muted-foreground">
              Generating response...
            </p>
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
