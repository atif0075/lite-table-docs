import { defineConfig } from "vitepress";

export const sharedConfig = defineConfig({
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
  themeConfig: {
    logo: "/assets/logo.svg",
    // search: {
    //   provider: "local",
    //   placeholder: "Search...",
    //   noResults: "No results found.",
    // },
  },
});
