import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/tailwindcss'],

  components: {
    dirs: [
      '~/components',
    ]
  },

  typescript: {
    strict: true
  },

  publicRuntimeConfig: {
    appName: process.env.APP_NAME
  },

})
