"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../atoms/card";
import { Button } from "../atoms/button";
import { Textarea } from "../atoms/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../atoms/dropdown-menu";
import { Trash, ChevronDown } from "lucide-react";
import { Message } from "../../types/ui.types";

interface MessageEditorProps {
  message: Message;
  onUpdateMessage: (id: string, content: string) => void;
  onChangeRole: (id: string, role: "system" | "user" | "assistant") => void;
  onDeleteMessage: (id: string) => void;
}

export function MessageEditor({
  message,
  onUpdateMessage,
  onChangeRole,
  onDeleteMessage,
}: MessageEditorProps) {
  return (
    <Card className="border bg-slate-50/30 dark:bg-slate-950/30">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1 px-2">
                <CardTitle className="text-sm capitalize">
                  {message.role}
                </CardTitle>
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem
                onClick={() => onChangeRole(message.id, "system")}
              >
                System
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onChangeRole(message.id, "user")}
              >
                User
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onChangeRole(message.id, "assistant")}
              >
                Assistant
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={() => onDeleteMessage(message.id)}
          >
            <Trash />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Textarea
          value={message.content}
          onChange={(e) => onUpdateMessage(message.id, e.target.value)}
          className="min-h-[75px] bg-transparent focus-visible:ring-0 focus-visible:ring-transparent p-2 placeholder:text-muted-foreground"
          placeholder={`Enter ${message.role} message...`}
        />
      </CardContent>
    </Card>
  );
}
