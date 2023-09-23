import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Vue 3 表格 Lite","text":"輕量、高速","tagline":"精簡的 Vue.js 3 數據表格 => 輕鬆排序、分頁和自定義！","image":{"src":"https://gist.githubusercontent.com/atif0075/e13ad93102afb6f85cc383144ccb8ce4/raw/9f3351a4cea2ddec0385fcae2a7140553a7c10ab/v3logo.svg","alt":"Vue 圖標"},"actions":[{"theme":"brand","text":"開始使用","link":"/tw/getting-started"},{"theme":"alt","text":"源代碼","link":"https://github.com/linmasahiro/vue3-table-lite"}]},"features":[{"icon":"🔍","title":"智能排序和分頁","details":"使用直觀的排序和分頁功能輕鬆組織和訪問數據，增強數據導航。"},{"icon":"✓","title":"選擇和管理行","details":"借助內置的行選擇功能，用戶可以輕鬆地選擇和管理行，實現無縫的數據互動。"},{"icon":"🔄","title":"動態數據呈現","details":"實時適應數據呈現，確保多彩且定制的表格視圖，增強用戶參與度。"}]},"headers":[],"relativePath":"tw/index.md","filePath":"tw/index.md"}');
const _sfc_main = { name: "tw/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("tw/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
