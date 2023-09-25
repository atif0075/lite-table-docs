import { defineConfig } from "vitepress";

export const cnConfig = defineConfig({
  title: "Vue 3 表格 Lite",
  description: "轻量、快速",

  themeConfig: {
    editLink: {
      pattern:
        "https://github.com/atif0075/lite-table-docs/edit/master/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },
    logo: "/assets/logo.svg",
    nav: [
      { text: "首页", link: "/cn/getting-started" },
      { text: "示例", link: "/cn/advance-examples" },
    ],

    sidebar: [
      // 侧边栏带下拉
      {
        collapsed: false,
        text: "快速入门",
        items: [{ text: "开始", link: "/cn/getting-started" }],
      },
      {
        collapsed: false,
        text: "使用方法",
        items: [
          { text: "默认模式", link: "/cn/usage/default-mode" },
          { text: "V-Slot 模式", link: "/cn/usage/v-slot-mode" },
          { text: "静态模式", link: "/cn/usage/static-mode" },
        ],
      },
      {
        collapsed: false,
        text: "API 参考",
        items: [
          { text: "Props 属性", link: "/cn/api-reference/props" },
          { text: "事件 Events", link: "/cn/api-reference/events" },
          { text: "插槽 Slots", link: "/cn/api-reference/slots" },
        ],
      },
      {
        collapsed: false,
        text: "示例",
        items: [
          { text: "简单示例", link: "/cn/simple-examples" },
          { text: "高级示例", link: "/cn/advance-examples" },
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
