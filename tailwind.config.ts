import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default <Partial<Config>>{
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./pages/**/*[!angular]*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Inter", "Raleway", "Libre Baskerville"],
      },
    },
  },
  plugins: [import("@tailwindcss/typography"), daisyui],
  daisyui: {
    themes: [
      "aqua",
      "autumn",
      "black",
      "bumblebee",
      "business",
      "coffee",
      "corporate",
      "cupcake",
      "cyberpunk",
      "dark",
      "dim",
      "dracula",
      "forest",
      "garden",
      "halloween",
      "lemonade",
      "light",
      "lofi",
      "night",
      "nord",
      "pastel",
      "retro",
      "sunset",
      "synthwave",
      "valentine",
      "winter",
    ],
  },
};
