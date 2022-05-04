import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@nuxtjs/tailwindcss'],
    css: ["@/assets/css/main.css"],
    ssr: false,
    target: 'static',
    meta: {
      title: 'Augalo — Application mobile',
      description: 'Application mobile pour les cavaliers'
    }
})