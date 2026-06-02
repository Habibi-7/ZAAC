import tailwindcss from '@tailwindcss/vite'
import { currentLocales } from './i18n/i18n'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['./layers/dashboard'],
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@vueuse/motion/nuxt',
    'shadcn-nuxt',
    '@vercel/analytics',
  ],
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css'],
  colorMode: {
    classSuffix: '',
  },
  runtimeConfig: {
    public: {
      previewMode: '',
      slugDefaultLength: '6',
      kvBatchLimit: '50',
    },
  },
  routeRules: {
    '/': {
      prerender: true,
    },
    '/sphere.bin': {
      headers: { 'Cache-Control': 'public, max-age=2592000, immutable' },
    },
    '/*.json': {
      headers: { 'Cache-Control': 'public, max-age=2592000, immutable' },
    },
    '/*.geojson': {
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
  compatibilityDate: 'latest',
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
      cookieKey: 'sink_i18n_redirected',
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
