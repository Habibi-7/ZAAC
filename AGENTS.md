# Repository Guidelines

## Project Overview

This repo contains the public Nuxt website for Zahoor Afkaar Academic Center (ZAAC) in Kabul, Afghanistan.

The site is static and intentionally simple: no backend, no auth, no database, and no API routes. Online class sign-up uses a `mailto:` link to `zaac.main@gmail.com`.

All documentation and comments must be in English.

## Project Structure

```txt
app/                    # Nuxt 4 application layer
  components/           # Vue components, PascalCase
    home/               # Homepage sections
    ui/                 # shadcn-vue primitives used by the public site
  pages/                # File-based routing
  lib/                  # Shared helpers
i18n/                   # Locale files and i18n config
public/                 # Static images, fonts, icons, and robots.txt
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

`pnpm install` runs `postinstall`, which executes `nuxt prepare`.

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

- Use the existing shadcn-vue primitives in `app/components/ui/`.
- Do not add broad generated component sets unless the page actually needs them.
- Use Tailwind CSS v4 utilities.
- Use static English for `aria-label`.
- Use icons from `lucide-vue-next`.

## Architecture Notes

- Keep the site focused on the public ZAAC homepage and contact flow.
- Do not reintroduce old fork code, server code, analytics consoles, or local API shims.
- Keep new content available in English, Dari (`fa-AF`), and Pashto (`ps-AF`) when user-facing.
