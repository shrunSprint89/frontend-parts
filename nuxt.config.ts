import { fileURLToPath } from "url";

// @blocksort asc
export default defineNuxtConfig({
  nitro: {
    preset: "cloudflare_pages",
  },
  alias: {
    "@types": fileURLToPath(new URL("./types", import.meta.url)),
  },
  app: {
    head: {
      htmlAttrs: {
        ["data-theme"]: "system",
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
  colorMode: {
    preference: "system", // default theme
    dataValue: "theme", // activate data-theme in <html> tag
  },
  compatibilityDate: "2025-02-02",
  content: {
    build: {
      markdown: {
        highlight: {
          langs: [
            "js",
            "jsx",
            "json",
            "ts",
            "tsx",
            "css",
            "html",
            "vue",
            "md",
            "mdc",
          ],
          theme: "nord",
        },
      },
    },
  },
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/fonts",
    "@vueuse/nuxt",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
