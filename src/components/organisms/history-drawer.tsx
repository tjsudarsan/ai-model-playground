"use client";

import { formatDistanceToNow } from "date-fns";
import {
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "../atoms/drawer";
import { Button } from "../atoms/button";
import { HistoryItem } from "../../types/ui.types";

interface HistoryDrawerProps {
  history: HistoryItem[];
  onSelectHistory: (historyItem: HistoryItem) => void;
  onClearHistory: () => void;
}

export default function HistoryDrawer({
  history,
  onSelectHistory,
  onClearHistory,
}: HistoryDrawerProps) {
  return (
    <>
      <DrawerHeader>
        <DrawerTitle>Prompt History</DrawerTitle>
        <DrawerDescription>
          Select a previous prompt to load it back into the playground
        </DrawerDescription>
      </DrawerHeader>
      <div className="px-4 overflow-y-auto flex-1">
        {history.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No history items yet
          </div>
        ) : (
          <div className="space-y-4">
            {history.map((item) => {
              const displayText = item.prompt;

              return (
                <div
                  key={item.id}
                  className="border rounded-lg p-3 hover:bg-muted/50 cursor-pointer transition-colors"
                  onClick={() => onSelectHistory(item)}
                >
                  <div className="flex justify-between mb-2">
                    <div className="font-medium truncate flex-1">
                      {displayText.substring(0, 60)}
                      {displayText.length > 60 ? "..." : ""}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(item.timestamp), {
                        addSuffix: true,
                      })}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    {item.responses.map((response) => {
                      const modelId = response.modelId;
                      // Use first few characters of response
                      const preview =
                        response.text.substring(0, 40) +
                        (response.text.length > 40 ? "..." : "");
                      return (
                        <div key={modelId} className="truncate">
                          <span className="font-medium">{modelId}:</span>{" "}
                          {preview}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <DrawerFooter>
        <Button
          variant="outline"
          onClick={onClearHistory}
          disabled={history.length === 0}
        >
          Clear History
        </Button>
      </DrawerFooter>
    </>
  );
}
