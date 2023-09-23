import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Vue 3 Table Lite","text":"Light Weight, Faster","tagline":"Streamlined Vue.js 3 Data Tables => Sort, Page, and Customize with Ease!","image":{"src":"https://gist.githubusercontent.com/atif0075/e13ad93102afb6f85cc383144ccb8ce4/raw/9f3351a4cea2ddec0385fcae2a7140553a7c10ab/v3logo.svg","alt":"Vue logo"},"actions":[{"theme":"brand","text":"Get Started","link":"/getting-started"},{"theme":"alt","text":"Source Code","link":"https://github.com/linmasahiro/vue3-table-lite"}]},"features":[{"icon":"🔍","title":"Smart Sorting & Paging","details":"Effortlessly organize and access data with intuitive sorting and paging features, enhancing data navigation."},{"icon":"✓","title":"Select & Manage Rows","details":"Enable seamless data interaction as users pick and manage rows with built-in row selection capabilities."},{"icon":"🔄","title":"Dynamic Data Rendering","details":"Fluidly adapt data presentation in real-time, ensuring a colorful and tailored table view that enhances user engagement."}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
