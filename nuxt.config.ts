import tailwindcss from '@tailwindcss/vite'
import { currentLocales } from './i18n/i18n'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@vercel/analytics',
    'shadcn-nuxt',
  ],
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css'],
  colorMode: {
    classSuffix: '',
  },
  routeRules: {
    '/': {
      prerender: true,
    },
    '/*.json': {
      headers: { 'Cache-Control': 'public, max-age=2592000, immutable' },
    },
  },
  experimental: {
    enforceModuleCompatibility: true,
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ['vite/client'],
      },
    },
  },
  compatibilityDate: '2026-06-03',
  nitro: {
    preset: 'static',
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    worker: {
      format: 'es',
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  i18n: {
    locales: currentLocales,
    compilation: {
      strictMessage: false,
      escapeHtml: true,
    },
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'zaac_i18n_redirected',
      redirectOn: 'root',
    },
    baseUrl: '/',
    defaultLocale: 'en-US',
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './app/components/ui',
  },
})
