// https://nuxt.com/docs/api/configuration/nuxt-config
import * as daisyui from "daisyui";

// @blocksort asc
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        ["data-theme"]: "retro",
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
      title: "Nuxt 3 Starter",
      bodyAttrs: {
        class: "min-h-dvh",
      },
    },
  },
  compatibilityDate: "2025-02-02",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/image",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  tailwindcss: {
    config: {
      plugins: [daisyui],
    },
  },
});
