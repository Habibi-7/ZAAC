import type { LocaleObject } from '@nuxtjs/i18n'

const locales: LocaleObject[] = [
  {
    code: 'en-US',
    file: 'en-US.json',
    name: 'English',
    emoji: '🇺🇸',
  },
  {
    code: 'fa-AF',
    file: 'fa-AF.json',
    name: 'فارسی',
    dir: 'rtl',
    emoji: '🇦🇫',
  },
  {
    code: 'ps-AF',
    file: 'ps-AF.json',
    name: 'پښتو',
    dir: 'rtl',
    emoji: '🇦🇫',
  },
]

export const currentLocales = [...locales].sort((a, b) => a.code.localeCompare(b.code))
