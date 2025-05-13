import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import {
  HistoryItem,
  Metrics,
  PromptMessage,
  ModelParameters,
} from "@/types/ui.types";
import { Prompt, PromptInputMessage, PromptResponse } from "@/generated/prisma";
import { auth } from "@/auth";
export async function GET() {
  try {
    const session = await auth();

    console.log(session);

    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get history items with their responses and messages
    const historyItems = await prisma.prompt.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        responses: true,
        messages: {
          orderBy: {
            order: "asc",
          },
        },
      },
      orderBy: {
        timestamp: "desc",
      },
    });

    // Format the data for the frontend
    const formattedHistory = historyItems.map(
      (
        item: Prompt & {
          messages: PromptInputMessage[];
          responses: PromptResponse[];
        }
      ) => ({
        id: item.id,
        prompt: item.prompt,
        timestamp: item.timestamp.toISOString(),
        // Pass messages
        messages: item.messages.map(
          (message: PromptInputMessage): PromptMessage => ({
            role: message.role,
            content: message.content,
            order: message.order,
          })
        ),
        // Pass parameters if they exist
        parameters:
          item.temperature !== null ||
          item.maxTokens !== null ||
          item.topP !== null
            ? ({
                temperature: item.temperature ?? 0.7,
                maxTokens: item.maxTokens,
                topP: item.topP ?? 1.0,
                frequencyPenalty: item.frequencyPenalty ?? 0.0,
                presencePenalty: item.presencePenalty ?? 0.0,
              } as ModelParameters)
            : undefined,
        // Pass responses
        responses: item.responses.map((response: PromptResponse) => ({
          modelId: response.modelId,
          text: response.text ?? "",
          metrics: {
            promptTokens: response.promptTokens,
            completionTokens: response.completionTokens,
            totalTokens: response.totalTokens,
            responseTime: response.responseTime,
            estimatedCost: response.estimatedCost,
          } as Metrics,
        })),
      })
    ) as HistoryItem[];

    return NextResponse.json(formattedHistory);
  } catch (error) {
    console.error("Error fetching history:", error);
    return NextResponse.json(
      { error: "Failed to fetch history" },
      { status: 500 }
    );
  }
}

// Delete a history item by ID
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Missing history ID" },
        { status: 400 }
      );
    }

    // Delete the history item (cascade will delete responses and messages)
    await prisma.prompt.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting history:", error);
    return NextResponse.json(
      { error: "Failed to delete history item" },
      { status: 500 }
    );
  }
}

// Clear all history
export async function PATCH(request: NextRequest) {
  try {
    // Check if this is a clear all request
    const { clearAll } = await request.json();

    if (clearAll) {
      // Delete all history items (cascade will delete responses and messages)
      await prisma.prompt.deleteMany({});
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  } catch (error) {
    console.error("Error clearing history:", error);
    return NextResponse.json(
      { error: "Failed to clear history" },
      { status: 500 }
    );
  }
}
