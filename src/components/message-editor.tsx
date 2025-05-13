"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Settings,
  MessageSquare,
  Send,
  Trash,
  ChevronDown,
} from "lucide-react";
import { Message } from "./types";

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
  // Get message background color based on role
  const getMessageColor = (role: string) => {
    switch (role) {
      case "system":
        return "bg-yellow-500/10 border-yellow-500/20";
      case "user":
        return "bg-blue-500/10 border-blue-500/20";
      case "assistant":
        return "bg-green-500/10 border-green-500/20";
      default:
        return "bg-gray-500/10 border-gray-500/20";
    }
  };

  // Get message icon based on role
  const getMessageIcon = (role: string) => {
    switch (role) {
      case "system":
        return <Settings className="h-4 w-4 text-yellow-500" />;
      case "user":
        return <MessageSquare className="h-4 w-4 text-blue-500" />;
      case "assistant":
        return <Send className="h-4 w-4 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <Card className={`border ${getMessageColor(message.role)}`}>
      <CardHeader className="p-3 pb-0 flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-6 gap-1 px-2">
                {getMessageIcon(message.role)}
                <CardTitle className="text-sm capitalize">
                  {message.role}
                </CardTitle>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem
                onClick={() => onChangeRole(message.id, "system")}
              >
                <Settings className="h-4 w-4 mr-2 text-yellow-500" />
                System
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onChangeRole(message.id, "user")}
              >
                <MessageSquare className="h-4 w-4 mr-2 text-blue-500" />
                User
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onChangeRole(message.id, "assistant")}
              >
                <Send className="h-4 w-4 mr-2 text-green-500" />
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
            <Trash className="h-3 w-3" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-3">
        <Textarea
          value={message.content}
          onChange={(e) => onUpdateMessage(message.id, e.target.value)}
          className="min-h-[100px] bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-transparent p-0 placeholder:text-muted-foreground resize-none"
          placeholder={`Enter ${message.role} message...`}
        />
      </CardContent>
    </Card>
  );
}
