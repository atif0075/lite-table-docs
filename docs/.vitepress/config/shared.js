import { defineConfig } from "vitepress";

export const sharedConfig = defineConfig({
  title: "Vue 3 Lite Table",
  description:
    "A simple and lightweight data table component for Vue.js 3. Features sorting, paging, row check, dynamic data rendering, supported TypeScript, and more.",

  head: [
    [
      "meta",
      {
        name: "title",
        content:
          "Vue 3 Lite Table — Light Weight, Faster Table Library for Vue 3",
      },
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "A simple and lightweight data table component for Vue.js 3. Features sorting, paging, row check, dynamic data rendering, supported TypeScript, and more.",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content:
          "vue,vue3,table,vue3 table,table lite,vue3 table lite,table library",
      },
    ],
    ["meta", { name: "robots", content: "index, follow" }],
    [
      "meta",
      { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
    ],
    ["meta", { name: "language", content: "English" }],
    ["meta", { name: "revisit-after", content: "1 days" }],
    ["meta", { name: "author", content: "M Atif" }],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "ReoTTcKgUwVb6_Ls2uHpr7AnrGBZq_Gf8k7dvKm_Y3c",
      },
    ],

    // Open Graph / Facebook
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      { property: "og:url", content: "https://vue3-lite-table.vercel.app/" },
    ],
    [
      "meta",
      {
        property: "og:title",
        content:
          "Vue 3 Lite Table — Light Weight, Faster Table Library for Vue 3",
      },
    ],
    [
      "meta",
      {
        property: "og:description",
        content:
          "A simple and lightweight data table component for Vue.js 3. Features sorting, paging, row check, dynamic data rendering, supported TypeScript, and more.",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "https://vue3-lite-table.vercel.app/assets/logo.c7d311b6.svg",
      },
    ],

    // Twitter
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        property: "twitter:url",
        content: "https://vue3-lite-table.vercel.app/",
      },
    ],
    [
      "meta",
      {
        property: "twitter:title",
        content:
          "Vue 3 Lite Table — Light Weight, Faster Table Library for Vue 3",
      },
    ],
    [
      "meta",
      {
        property: "twitter:description",
        content:
          "A simple and lightweight data table component for Vue.js 3. Features sorting, paging, row check, dynamic data rendering, supported TypeScript, and more.",
      },
    ],
    [
      "meta",
      {
        property: "twitter:image",
        content: "https://vue3-lite-table.vercel.app/assets/logo.c7d311b6.svg",
      },
    ],
  ],

  sitemap: {
    hostname: "https://vue3-lite-table.vercel.app/",
  },
  markdown: {
    theme: {
      dark: "dracula-soft",
      light: "vitesse-light",
    },
    attrs: {
      leftDelimiter: "%{",
      rightDelimiter: "}%",
    },
  },
  ssr: {
    noExternal: ["TableLite"],
  },
  lastUpdated: true,
  themeConfig: {
    logo: "/assets/logo.svg",
    search: {
      provider: "local",
    },
    // search: {
    //   provider: "local",
    //   placeholder: "Search...",
    //   noResults: "No results found.",
    // },
  },
});
