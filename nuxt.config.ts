import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  head: {
    css: ["~/assets/styles.css"],
  },
  highlight: {
    theme: "gruvbox",
  },
});
