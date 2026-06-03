# ZAAC Website

Static public website for Zahoor Afkaar Academic Center in Kabul, Afghanistan.

## Stack

- Nuxt 4
- Vue 3
- Tailwind CSS 4
- shadcn-vue components
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

- `app/` contains the Nuxt app, homepage sections, layout, UI components, assets, and shared helpers.
- `i18n/` contains locales and i18n configuration.

The site has no backend, no auth, no database, and no API routes. Online class sign-up uses a `mailto:` link that opens the visitor's email client with a prepared draft.
