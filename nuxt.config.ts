// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [[
    '@pinia/nuxt',
    {
      autoImports: ['defineStore', 'acceptHMRUpdate']
    }],
  ],
  imports: {
    dirs: [
      'stores',
    ],
  },
  css: [
    '@/assets/global.css',
    'material-design-icons-iconfont/dist/material-design-icons.css'
  ],
})