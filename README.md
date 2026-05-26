# Sink UI

This repository keeps the Sink Nuxt interface intact and removes the Cloudflare/Nitro backend. Dashboard API calls are served by a local mock adapter in `app/utils/mock-api.ts`, so the pages remain interactive without external services.

## Stack

- Nuxt 4
- Vue 3
- Tailwind CSS 4
- shadcn-vue components
- Pinia
- Nuxt i18n

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm types:check
pnpm lint
```

The dev server runs on port `7465`.

## Structure

- `app/` contains the main Nuxt app, landing page, shared UI components, assets, composables, and utilities.
- `layers/dashboard/` contains the dashboard UI layer.
- `shared/` contains schemas, utilities, and types still used by the UI.
- `i18n/` contains locales and i18n configuration.
- `scripts/` generates static UI assets such as map, globe, and testimonial data.

There is no server implementation in this version. The `/api/**` strings still appear in components as UI-facing route keys, but `useAPI()` resolves them locally through the mock adapter.
