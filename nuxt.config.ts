// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  // @ts-ignore
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    'nuxt-studio'
  ],

  devtools: { enabled: true },

  css: ['./app/assets/css/tailwind.css'],

  fonts: {
    families: [
      { name: 'Sorts Mill Goudy', provider: 'google' },
      { name: 'Raleway', provider: 'google' }
    ]
  },

  experimental: {
    payloadExtraction: false
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  studio: {
    dev: true,
  },

  compatibilityDate: '2024-11-29'
})