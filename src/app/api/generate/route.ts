import { NextRequest, NextResponse } from "next/server";
import {
  getModel,
  estimateTokens,
  calculateCost,
  modelProviders,
  ModelId,
} from "@/lib/models";
import prisma from "@/lib/db";
import { HumanMessage } from "@langchain/core/messages";

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Invalid request: prompt must be a non-empty string" },
        { status: 400 }
      );
    }

    // Create a new history record
    const historyRecord = await prisma.playgroundHistory.create({
      data: {
        prompt,
      },
    });

    // Get model IDs from modelProviders
    const modelIds = Object.keys(modelProviders) as ModelId[];

    // Process each model in parallel
    const results = await Promise.all(
      modelIds.map(async (modelId) => {
        try {
          // Initialize the model
          const model = getModel(modelId, { streaming: false });

          // Create a human message
          const message = new HumanMessage(prompt);

          // Record start time
          const startTime = Date.now();

          // Invoke the model (without streaming)
          const response = await model.invoke([message]);

          // Calculate metrics
          const responseTime = (Date.now() - startTime) / 1000;
          const promptTokens = estimateTokens(prompt, modelId);
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
          await prisma.playgroundResponse.create({
            data: {
              historyId: historyRecord.id,
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
