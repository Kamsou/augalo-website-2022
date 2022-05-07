import { defineNuxtConfig } from 'nuxt'
import { defineNuxtPlugin } from '#app'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@nuxtjs/tailwindcss'],
    css: ["@/assets/css/main.css"],
    ssr: false,
    target: 'static',
    router: { 
      scrollBehavior(to, from, savedPosition) { 
        return {x: 0, y: 0}
      }
    }
})