// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content: "Sascha Metz - Webdeveloper based in Saarbrücken, Germany",
        },
      ],
      title: "Hello @smetz.dev",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/image", "@nuxtjs/tailwindcss"],

  tailwindcss: {
    cssPath: ["~/assets/css/main.css", { injectPosition: "first" }],
  },

  routeRules: {
    "/": {
      prerender: true,
    },
  },
});
