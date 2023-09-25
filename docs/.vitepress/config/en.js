import { defineConfig } from "vitepress";

export const enConfig = defineConfig({
  title: "Vue 3 Table Lite",
  description: "Light Weight, Faster",
  themeConfig: {
    editLink: {
      pattern:
        "https://github.com/atif0075/lite-table-docs/edit/master/docs/:path",
      text: "Edit this page on GitHub",
    },
    logo: "/assets/logo.svg",
    nav: [
      { text: "Home", link: "/getting-started" },
      { text: "Examples", link: "/advance-examples" },
    ],

    sidebar: [
      // side bar with dropdown
      {
        collapsed: false,
        text: "Quick Start",
        items: [{ text: "Getting Started", link: "/getting-started" }],
      },
      {
        collapsed: false,
        text: "Usage",
        items: [
          { text: "Default Mode", link: "/usage/default-mode" },
          { text: "V-Slot Mode", link: "/usage/v-slot-mode" },
          { text: "Static Mode", link: "/usage/static-mode" },
        ],
      },
      {
        collapsed: false,
        text: "API Reference",
        items: [
          { text: "Props", link: "/api-reference/props" },
          { text: "Events", link: "/api-reference/events" },
          { text: "Slots", link: "/api-reference/slots" },
        ],
      },
      {
        collapsed: false,
        text: "Examples",
        items: [
          { text: "Simple Examples", link: "/simple-examples" },
          { text: "Advance Examples", link: "/advance-examples" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/linmasahiro/vue3-table-lite",
      },
    ],
  },
});
