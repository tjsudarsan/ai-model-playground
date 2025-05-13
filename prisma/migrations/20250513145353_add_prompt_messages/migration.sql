-- AlterTable
ALTER TABLE "Prompt" ADD COLUMN     "frequencyPenalty" DOUBLE PRECISION,
ADD COLUMN     "maxTokens" INTEGER,
ADD COLUMN     "presencePenalty" DOUBLE PRECISION,
ADD COLUMN     "temperature" DOUBLE PRECISION,
ADD COLUMN     "topP" DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "PromptInputMessage" (
    "id" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "promptId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "PromptInputMessage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PromptInputMessage_promptId_order_idx" ON "PromptInputMessage"("promptId", "order");

-- AddForeignKey
ALTER TABLE "PromptInputMessage" ADD CONSTRAINT "PromptInputMessage_promptId_fkey" FOREIGN KEY ("promptId") REFERENCES "Prompt"("id") ON DELETE CASCADE ON UPDATE CASCADE;
