"use client";

import React, { useEffect } from "react";
import { Button } from "../atoms/button";
import { Drawer, DrawerContent, DrawerTrigger } from "../atoms/drawer";
import { History, Send, Plus } from "lucide-react";
import HistoryDrawer from "../organisms/history-drawer";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../atoms/resizable";
import { MessageEditor } from "../molecules/message-editor";
import { ParametersPopover } from "../molecules/parameters-popover";
import { ModelResponsePanel } from "../organisms/model-response-panel";
import { models } from "../../types/ui.types";
import { usePlaygroundStore } from "@/store/playground-store";
import { useSession } from "next-auth/react";

export default function Playground() {
  const { data: session } = useSession();
  // Get state and actions from Zustand store
  const {
    messages,
    isLoading,
    responses,
    history,
    isDrawerOpen,
    parameters,
    addMessage,
    updateMessage,
    changeMessageRole,
    deleteMessage,
    setParameters,
    setIsDrawerOpen,
    handleSendPrompt,
    fetchHistory,
    loadFromHistory,
    clearHistory,
  } = usePlaygroundStore();

  // Fetch history on component mount
  useEffect(() => {
    fetchHistory();
  }, [session?.user?.id, fetchHistory]);

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-screen rounded-lg border pt-16"
    >
      {/* Left panel - Messages and Parameters */}
      <ResizablePanel defaultSize={40} minSize={30}>
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b p-4">
            <div className="text-lg font-medium">Prompt template</div>
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
              <div>
                <Button
                  variant="outline"
                  onClick={() => addMessage()}
                  disabled={isLoading}
                >
                  <Plus className="h-3 w-3 mr-1" /> Add Message
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t p-4">
            <div className="flex justify-end items-center gap-2">
              <Button
                onClick={handleSendPrompt}
                disabled={isLoading || messages.some((m) => !m.content.trim())}
              >
                <Send className="h-4 w-4 mr-1" />
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
  );
}
