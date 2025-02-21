import { fileURLToPath } from "url";
// @blocksort asc
export default defineNuxtConfig({
  nitro: {
    preset: "cloudflare_pages",
  },
  imports: {
    dirs: ["types", "constants"],
  },
  alias: {
    "@types": fileURLToPath(new URL("./types", import.meta.url)),
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
      title: "Frontend.parts",
      bodyAttrs: {
        class: "min-h-dvh",
      },
    },
    layoutTransition: { name: "layout", mode: "out-in" },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  colorMode: {
    preference: "nord", // default value of $colorMode.preference
    dataValue: "theme", // activate data-theme in <html> tag
    fallback: "light", // fallback value if not system preference found
    classPrefix: "",
    classSuffix: "",
  },

  compatibilityDate: "2025-02-02",
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "github-light",
            aqua: "	vesper",
            autumn: "min-light",
            coffee: "red",
            corporate: "github-light",
            cupcake: "min-light",
            dark: "aurora-x",
            dim: "andromeeda",
            dracula: "dracula",
            forest: "everforest-light",
            garden: "one-light",
            lemonade: "solarized-light",
            light: "github-light",
            lofi: "min-light",
            nord: "min-light",
            pastel: "kanagawa-lotus",
            retro: "kanagawa-lotus",
            valentine: "slack-ochin",
            winter: "one-light",
          },
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
    "nuxt-particles",
  ],
  particles: {
    mode: "full",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
