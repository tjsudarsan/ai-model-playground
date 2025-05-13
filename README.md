# AI Model Playground

A web application that allows users to compare responses from different AI models side-by-side in a parallel view, helping evaluate which models perform best for specific use cases by directly comparing outputs, response times, token usage, and estimated costs.

## Project Overview

The AI Model Playground provides a three-panel interface for comparing responses from different language models simultaneously:

- OpenAI (GPT-4o)
- Anthropic (Claude 3 Opus/Sonnet)
- XAI

Users can input a single prompt, which is sent to all three models concurrently. The application displays the responses side-by-side, along with performance metrics such as response time, token usage, and estimated cost.

## Features

- **Three-Model Comparison**: Compare responses from three different AI models simultaneously
- **Unified Prompt Interface**: Send the same prompt to multiple models with a single input
- **Performance Metrics**: Track response time, token counts, and estimated costs for each model
- **History Tracking**: Save interesting comparisons and revisit them later
- **User Authentication**: Secure login and sign-up functionality

## Tech Stack

- **Frontend**: React 19, Next.js 15, TypeScript, ShadCN UI + Tailwind CSS
- **State Management**: Zustand
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with Prisma ORM
- **AI Integration**: LangChain for unified provider interface
- **Authentication**: NextAuth.js

## Project Structure

```
/
├── src/
│   ├── app/                  # Next.js app router pages
│   ├── components/           # React components (organized by atomic design)
│   │   ├── atoms/            # Basic UI components
│   │   ├── molecules/        # Composite components
│   │   ├── organisms/        # Complex UI sections
│   │   ├── templates/        # Page layouts
│   │   └── pages/            # Full page components
│   ├── lib/                  # Utility libraries
│   ├── store/                # Zustand store
│   ├── types/                # TypeScript type definitions
│   └── utils/                # Helper functions
├── prisma/                   # Database schema and migrations
│   └── schema.prisma         # Prisma schema definition
└── public/                   # Static assets
```

## Getting Started

### Prerequisites

- Node.js (v20 or later)
- PostgreSQL database
- API keys for OpenAI, Anthropic, and XAI

### Environment Setup

Create a `.env` file in the root directory with the following variables:

```
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=

ANTHROPIC_API_KEY=
XAI_API_KEY=
OPENAI_API_KEY=

NEXTAUTH_SECRET=
NEXTAUTH_URL=
```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tjsudarsan/ai-model-playground.git
   cd ai-model-playground
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the database:

   ```bash
   npx prisma migrate dev
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema

The application uses the following data models:

- **User**: Stores user authentication information
- **Prompt**: Records user prompts and associated parameters
- **PromptInputMessage**: Stores individual messages in a conversation
- **PromptResponse**: Tracks model responses and performance metrics

## API Routes

The application provides API endpoints for:

- User authentication
- Sending prompts to AI models
- Retrieving and managing comparison history

## Deployment

The application can be deployed to Vercel:

```bash
npm run build
vercel deploy
```

## Future Improvements

- Add more AI model providers
- Implement more advanced prompt templates
- Add visualization for performance comparisons
- Enhance history features with tagging and searching
- Add export functionality for comparisons

## License

This project is licensed under the MIT License - see the LICENSE file for details.
