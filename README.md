# ZAAC Website

Static Nuxt website for Zahoor Afkaar Academic Center in Kabul, Afghanistan.

## What This Is

- Public landing page for in-person and online classes.
- No backend, auth, database, dashboard, or API routes.
- Online class sign-up uses a prepared `mailto:` link to `zaac.main@gmail.com`.
- Supported locales: English, Dari (`fa-AF`), and Pashto (`ps-AF`).

## Commands

```bash
pnpm install
pnpm dev          # Local dev server on port 7465
pnpm build        # Static production build
pnpm preview
pnpm types:check
pnpm lint
```

## Structure

- `app/components/home/` - homepage sections.
- `app/components/ui/` - small shadcn-vue primitive set used by the site.
- `app/assets/css/tailwind.css` - global tokens and section styles.
- `i18n/locales/` - English, Dari, and Pashto copy.
- `public/images/` - static site imagery.

## Credits

This project began as a fork of [Sink](https://github.com/miantiao-me/Sink). It has since been adapted into a static website for ZAAC.
