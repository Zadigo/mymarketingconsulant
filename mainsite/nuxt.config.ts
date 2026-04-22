// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/ui',
    // '@nuxt/a11y',
    // '@nuxt/content',
    // '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils/module',
    '@nuxtjs/i18n',
    // '@nuxtjs/ngrok',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@vueuse/motion'
    // '@vercel/analytics',
    // '@vercel/speed-insights'
  ],

  ssr: true,

  devtools: {
    enabled: true
  },

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
      duration: { enter: 400, leave: 200 },
      // enterActiveClass: 'transition-all ease-in-out',
      // leaveActiveClass: 'transition-all ease-in-out',
      enterFromClass: 'opacity-0 translate-x-5',
      enterToClass: 'opacity-100 translate-x-0',
      leaveFromClass: 'opacity-100 translate-x-0',
      leaveToClass: 'opacity-0 translate-x-5'
    },
    head: {
      titleTemplate: '%s - My Marketing Consultant'
    }
  },

  css: ['~/assets/css/main.css'],

  site: {
    name: 'My Marketing Consultant',
    url: process.env.NUXT_PUBLIC_SITE_URL
  },

  routeRules: {
    '/': { prerender: true },
    '/a-propos': { prerender: true },
    '/contact': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  fonts: {
    families: [
      {
        name: 'Oswald'
      },
      {
        name: 'Montserrat'
      }
    ]
  },

  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL,
    langDir: './locales',
    defaultLocale: 'fr',
    vueI18n: './i18n.config.ts',
    customRoutes: 'config',
    pages: {
      'a-propos': { fr: '/a-propos', en: '/about' },
      'contact': { fr: '/contact', en: '/contact' }
    },
    locales: [
      {
        code: 'fr',
        language: 'fr-FR',
        file: 'fr-FR.ts',
        dir: 'ltr',
        name: 'French'
      },
      {
        code: 'en',
        language: 'en-US',
        files: ['en.ts', 'en-US.ts'],
        dir: 'ltr',
        name: 'English'
      }
    ]
  }
})
