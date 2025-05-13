import { NextRequest, NextResponse } from "next/server";
import {
  getModel,
  estimateTokens,
  calculateCost,
  modelProviders,
  ModelId,
} from "@/lib/models";
import prisma from "@/lib/db";
import {
  HumanMessage,
  SystemMessage,
  AIMessage,
} from "@langchain/core/messages";
import { auth } from "@/auth";

// Type for request body
type RequestBody = {
  messages: {
    id: string;
    role: "system" | "user" | "assistant";
    content: string;
  }[];
  parameters?: {
    temperature: number;
    maxTokens: number | null;
    topP: number;
    frequencyPenalty: number;
    presencePenalty: number;
  };
};

export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse the request body
    const body: RequestBody = await request.json();
    const { messages, parameters } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid request: messages must be a non-empty array" },
        { status: 400 }
      );
    }

    // Extract prompt text for backward compatibility and storage
    const lastMessage = [...messages].reverse()[0];
    const promptText = lastMessage.content;

    // Create a new history record
    const historyRecord = await prisma.prompt.create({
      data: {
        userId: session.user.id,
        prompt: promptText,
        // Store model parameters
        temperature: parameters?.temperature ?? undefined,
        maxTokens:
          parameters?.maxTokens !== null ? parameters?.maxTokens : undefined,
        topP: parameters?.topP ?? undefined,
        frequencyPenalty: parameters?.frequencyPenalty ?? undefined,
        presencePenalty: parameters?.presencePenalty ?? undefined,
      },
    });

    // Create messages separately after creating the prompt
    await Promise.all(
      messages.map((msg, index) =>
        prisma.promptInputMessage.create({
          data: {
            promptId: historyRecord.id,
            role: msg.role,
            content: msg.content,
            order: index,
          },
        })
      )
    );

    // Get model IDs from modelProviders
    const modelIds = Object.keys(modelProviders) as ModelId[];

    // Process each model in parallel
    const results = await Promise.all(
      modelIds.map(async (modelId) => {
        try {
          // Initialize the model with parameters
          const model = getModel(modelId, {
            streaming: false,
            temperature: parameters?.temperature,
            maxTokens:
              parameters && parameters.maxTokens !== null
                ? parameters.maxTokens
                : undefined,
            topP: parameters?.topP,
            frequencyPenalty: parameters?.frequencyPenalty,
            presencePenalty: parameters?.presencePenalty,
          });

          // Convert messages to LangChain format
          const langchainMessages = messages.map((msg) => {
            switch (msg.role) {
              case "system":
                return new SystemMessage(msg.content);
              case "user":
                return new HumanMessage(msg.content);
              case "assistant":
                return new AIMessage(msg.content);
              default:
                return new HumanMessage(msg.content);
            }
          });

          // Record start time
          const startTime = Date.now();

          // Invoke the model
          const response = await model.invoke(langchainMessages);

          // Calculate metrics
          const responseTime = (Date.now() - startTime) / 1000;

          // Calculate total prompt tokens by summing all message tokens
          let promptTokens = 0;
          for (const msg of messages) {
            promptTokens += estimateTokens(msg.content, modelId);
          }

          const completionTokens = estimateTokens(
            response.content as string,
            modelId
          );
          const totalTokens = promptTokens + completionTokens;
          const estimatedCost = calculateCost(
            promptTokens,
            completionTokens,
            modelId
          );

          // Store the response in the database
          await prisma.promptResponse.create({
            data: {
              promptId: historyRecord.id,
              modelId,
              text: response.content as string,
              promptTokens,
              completionTokens,
              totalTokens,
              responseTime,
              estimatedCost,
            },
          });

          return {
            modelId,
            response: response.content,
            metrics: {
              promptTokens,
              completionTokens,
              totalTokens,
              responseTime,
              estimatedCost,
            },
          };
        } catch (error) {
          console.error(`Error with model ${modelId}:`, error);

          // Return error information
          return {
            modelId,
            error: error instanceof Error ? error.message : "Unknown error",
          };
        }
      })
    );

    // Prepare the response with all model outputs
    const responseData = {
      historyId: historyRecord.id,
      models: results.map((result) => {
        const modelInfo = modelProviders[result.modelId as ModelId];
        return {
          id: result.modelId,
          name: modelInfo.name,
          provider: modelInfo.provider,
          response: "error" in result ? null : result.response,
          error: "error" in result ? result.error : null,
          metrics: "metrics" in result ? result.metrics : null,
        };
      }),
    };

    // Return the combined response
    return NextResponse.json(responseData);
  } catch (error) {
    console.error("API error:", error);

    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
