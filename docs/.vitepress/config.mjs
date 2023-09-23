import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
import { cnConfig } from "./config/cn.js";
import { enConfig } from "./config/en";
import { jpConfig } from "./config/jp";
import { twConfig } from "./config/tw";
import { sharedConfig } from "./config/shared";

export default defineConfig({
  ...sharedConfig,
  locales: {
    // 繁體中文 => zh-TW
    // 简体中文 => zh-CN
    root: { label: "English", lang: "en-US", link: "/", ...enConfig },
    jp: { label: "日本語", lang: "ja-JP", link: "/jp/", ...jpConfig },
    tw: { label: "繁體中文", lang: "zh-TW", link: "/tw/", ...twConfig },
    cn: { label: "简体中文", lang: "zh-CN", link: "/cn/", ...cnConfig },
  },
});
