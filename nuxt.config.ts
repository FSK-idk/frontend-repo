// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    css: {
      modules: {
        localsConvention: "dashes",
      },
    },
  },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Open Sans": [400, 700],
          Montserrat: true,
        },
      },
    ],
    [
      "nuxt-svgo",
      {
        defaultImport: "component",
      },
    ],
    "vue-yandex-maps/nuxt",
    "@vee-validate/nuxt",
  ],
  yandexMaps: {
    apikey: process.env.YANDEX_MAPS_API_KEY,
  },
  css: ["assets/scss/main.scss"],
});
