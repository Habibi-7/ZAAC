# Repository Guidelines

## Project

Static Nuxt 4 website for Zahoor Afkaar Academic Center (ZAAC) in Kabul, Afghanistan.

Keep it simple: no backend, auth, database, dashboard, or API routes. Online class sign-up uses a `mailto:` link to `zaac.main@gmail.com`.

## Structure

```txt
app/components/home/   # Homepage sections
app/components/ui/     # Minimal shadcn-vue primitives
app/assets/css/        # Global tokens and section styles
i18n/locales/          # en-US, fa-AF, ps-AF
public/images/         # Static imagery
```

## Commands

```bash
pnpm dev          # Port 7465
pnpm build        # Static production build
pnpm types:check
pnpm lint
```

## Rules

- Use `<script setup lang="ts">` and PascalCase Vue component files.
- Use TypeScript; avoid `any`.
- Use 2 spaces, single quotes, no semicolons, trailing commas.
- Prefer Nuxt auto-imports for Vue/Nuxt helpers; explicitly import external libraries, types, and icons.
- Use `lucide-vue-next` for icons. Brand icons can live in `app/components/icons/`.
- Keep user-facing copy in English, Dari (`fa-AF`), and Pashto (`ps-AF`).
- Use static English `aria-label` values.
- Add only UI primitives the site actually needs.
- Do not reintroduce old fork code, server code, analytics consoles, or local API shims.
- Preserve the current visual design. Make small, verifiable changes and run checks after risky edits.
