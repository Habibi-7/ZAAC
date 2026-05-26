# Repository Guidelines

Guidelines for agentic coding agents operating in this UI-only Sink codebase.

## Project Overview

This repo preserves the Sink Nuxt interface and removes the Cloudflare/Nitro backend. Dashboard API calls are mocked locally through `app/utils/mock-api.ts`.

All documentation and comments must be in English.

## Project Structure

```txt
app/                    # Nuxt 4 application layer
  components/           # Vue components, PascalCase
    ui/                 # shadcn-vue components; do not edit generated files
  composables/          # Vue composables, camelCase use* prefix
  pages/                # File-based routing
  types/                # Type re-exports from shared/
  utils/                # UI utilities and mock API adapter
  lib/                  # Shared helpers
layers/dashboard/       # Dashboard UI layer
shared/                 # UI-facing schemas, types, and utilities
i18n/                   # Locale files and i18n config
scripts/                # Static UI asset generation
```

## Commands

Use pnpm with Node.js 22+.

```bash
pnpm dev          # Start dev server on port 7465
pnpm build        # Production build
pnpm preview      # Preview the built Nuxt app
pnpm lint:fix     # ESLint with auto-fix
pnpm types:check  # TypeScript type check
```

`pnpm install` runs `postinstall`, which executes `build:map && nuxt prepare`.

## Code Style

- Use TypeScript everywhere.
- Prefer `interface` for object shapes and `type` for unions/aliases.
- Avoid `any`; use proper types or `unknown`.
- Use 2-space indentation, single quotes, no semicolons, and trailing commas.
- Prefer Nuxt auto-imports for Vue/Nuxt helpers.
- Use explicit imports for external libraries, types, and icons.

## Vue Components

Use `<script setup lang="ts">` for Vue components. Component files should be PascalCase.

## UI Components

- Use shadcn-vue from `app/components/ui/`.
- Do not edit generated shadcn-vue files unless the task explicitly requires it.
- Use `ResponsiveModal` for mobile-optimized dialogs.
- Use Tailwind CSS v4 utilities.
- Use static English for `aria-label`.
- Use icons from `lucide-vue-next`.

## Mock API

`app/utils/api.ts` routes all dashboard requests to `app/utils/mock-api.ts`.

When a screen needs data, add or adjust mock responses there instead of reintroducing server routes. Keep mock data deterministic enough that the UI remains easy to review.

## Architecture Notes

- The dashboard layer is client-side only (`ssr: false`).
- The root app remains a Nuxt app with i18n and static asset generation.
- The repo intentionally has no Nitro API routes, Cloudflare bindings, Worker config, or API tests.
