// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  $development: {
    app: {
      head: {
        title: 'Dev',
      }
    }
  },

  app: {
    head: {
      title: "HTML Lesson",
      titleTemplate: "%s",
      viewport: 'width=device-width, initial-scale=1.0',
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: [
    "~/assets/css/style.scss"
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/ui", "nuxt-lodash"]

})
