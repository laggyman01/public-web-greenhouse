// nuxt.config.ts
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'


export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  sourcemap: { server: false, client: false },
  app: {
    baseURL: "/public-web-greenhouse/"
  },
  nitro: {
    preset: 'static'
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  css: [
    '@/assets/css/tailwind.css',  // ระบุ path ของไฟล์ tailwind.css ให้ถูกต้อง
  ],
  // modules: [
  //   '@nuxtjs/tailwindcss',  // ใช้โมดูลนี้เพื่อเชื่อมกับ TailwindCSS
 //  ],
 routeRules: {
    '/spa': { ssr: false },
    '/static': { static: true },
    '/swr': { swr: true },
  },
  compatibilityDate: '2025-04-22',
})
