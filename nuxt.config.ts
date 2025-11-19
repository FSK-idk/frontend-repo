// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
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
  ],
  css: ["assets/scss/main.scss"],
});
