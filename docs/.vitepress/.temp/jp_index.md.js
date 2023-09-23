import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Vue 3 Table Lite","text":"軽量、高速","tagline":"Vue.js 3データテーブルを最適化 => ソート、ページング、カスタマイズが簡単に！","image":{"src":"https://gist.githubusercontent.com/atif0075/e13ad93102afb6f85cc383144ccb8ce4/raw/9f3351a4cea2ddec0385fcae2a7140553a7c10ab/v3logo.svg","alt":"Vueロゴ"},"actions":[{"theme":"brand","text":"はじめる","link":"/jp/getting-started"},{"theme":"alt","text":"ソースコード","link":"https://github.com/linmasahiro/vue3-table-lite"}]},"features":[{"icon":"🔍","title":"スマートソート＆ページング","details":"直感的なソートとページング機能でデータを簡単に整理し、データナビゲーションを向上させます。"},{"icon":"✓","title":"行の選択と管理","details":"組み込みの行選択機能を使用して、ユーザーが行を選択および管理する際のデータのシームレスな操作を有効にします。"},{"icon":"🔄","title":"動的データ表示","details":"リアルタイムでデータ表示を柔軟に適応し、ユーザーエンゲージメントを高めるカラフルでカスタマイズされたテーブルビューを提供します。"}]},"headers":[],"relativePath":"jp/index.md","filePath":"jp/index.md"}');
const _sfc_main = { name: "jp/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("jp/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
