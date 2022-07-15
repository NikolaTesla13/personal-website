import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  ssr: false,
  modules: ["@nuxt/content"],
  head: {
    css: ["~/assets/styles.css"],
  },
  highlight: {
    theme: "gruvbox",
  },
});
