import { defineConfig } from "vitepress";

export const jpConfig = defineConfig({
  title: "Vue 3 Table Lite",
  description: "軽量、高速",

  themeConfig: {
    editLink: {
      pattern:
        "https://github.com/atif0075/lite-table-docs/edit/master/docs/:path",
        text: 'GitHub でこのページを編集する'
    },
    logo: "/assets/logo.svg",
    nav: [
      { text: "ホーム", link: "/jp/getting-started" },
      { text: "例", link: "/jp/advance-examples" },
    ],

    sidebar: [
      // サイドバーのドロップダウン
      {
        collapsed: false,
        text: "クイックスタート",
        items: [{ text: "はじめに", link: "/jp/getting-started" }],
      },
      {
        collapsed: false,
        text: "使用法",
        items: [
          { text: "デフォルトモード", link: "/jp/usage/default-mode" },
          { text: "スロットモード", link: "/jp/usage/v-slot-mode" },
          { text: "静的モード", link: "/jp/usage/static-mode" },
        ],
      },
      {
        collapsed: false,
        text: "API リファレンス",
        items: [
          { text: "プロパティ", link: "/jp/api-reference/props" },
          { text: "イベント", link: "/jp/api-reference/events" },
          { text: "スロット", link: "/jp/api-reference/slots" },
        ],
      },
      {
        collapsed: false,
        text: "例",
        items: [
          { text: "シンプル", link: "/jp/simple-examples" },
          { text: "アドバンス", link: "/jp/advance-examples" },
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
