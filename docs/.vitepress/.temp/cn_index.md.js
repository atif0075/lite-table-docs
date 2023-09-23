import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Vue 3 表格 Lite","text":"轻量、高速","tagline":"简化的Vue.js 3数据表格 => 轻松排序、分页和定制！","image":{"src":"https://gist.githubusercontent.com/atif0075/e13ad93102afb6f85cc383144ccb8ce4/raw/9f3351a4cea2ddec0385fcae2a7140553a7c10ab/v3logo.svg","alt":"Vue 图标"},"actions":[{"theme":"brand","text":"开始使用","link":"/cn/getting-started"},{"theme":"alt","text":"源代码","link":"https://github.com/linmasahiro/vue3-table-lite"}]},"features":[{"icon":"🔍","title":"智能排序和分页","details":"使用直观的排序和分页功能轻松组织和访问数据，增强数据导航。"},{"icon":"✓","title":"选择和管理行","details":"借助内置的行选择功能，用户可以轻松地选择和管理行，实现无缝的数据交互。"},{"icon":"🔄","title":"动态数据呈现","details":"实时适应数据呈现，确保丰富多彩且定制化的表格视图，增强用户参与度。"}]},"headers":[],"relativePath":"cn/index.md","filePath":"cn/index.md"}');
const _sfc_main = { name: "cn/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("cn/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
