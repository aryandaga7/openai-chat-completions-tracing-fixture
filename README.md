# OpenAI Chat Completions tracing fixture

A minimal Node.js TypeScript CLI containing one non-streaming OpenAI Chat Completions call. It is intended as a stable fixture for tracing integration studies.

## Requirements

- Node.js 22
- An `OPENAI_API_KEY`

## Run

```sh
npm ci
npm run build
OPENAI_API_KEY=your-api-key npm start -- "Say hello in five words."
```

Set `OPENAI_MODEL` to override the default `gpt-4.1-mini` model.

## Validation

```sh
npm run typecheck
npm run build
```
