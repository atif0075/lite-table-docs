import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { g as grouping, a as groupingWithToggle, c as cusDisplayData, F as Filter, b as asyncFilter, f as filterInTable, d as customizeStyle, e as customizeStyle2, h as customizeMessages, i as customizePageDropdown, j as catchRow, k as fixedFirstColumn, l as fixedHeaderAndFirstColumn } from "./cus-page-drop.8134e2e5.js";
import { useSSRContext } from "vue";
import "vue3-table-lite";
import "./plugin-vue_export-helper.cc2b3d55.js";
const advanceExamples_md_vue_type_style_index_0_lang = "";
const __pageData = JSON.parse('{"title":"先進的な事例","description":"","frontmatter":{},"headers":[],"relativePath":"tw/advance-examples.md","filePath":"tw/advance-examples.md"}');
const __default__ = { name: "tw/advance-examples.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="先進的な事例" tabindex="-1">先進的な事例 <a class="header-anchor" href="#先進的な事例" aria-label="Permalink to &quot;先進的な事例&quot;">​</a></h1><p>次の例はより高度で、より複雑な使用例の参考として使用することを目的としています。</p><h2 id="grouping" tabindex="-1">Grouping <a class="header-anchor" href="#grouping" aria-label="Permalink to &quot;Grouping&quot;">​</a></h2>`);
      _push(ssrRenderComponent(grouping, null, null, _parent));
      _push(`<h2 id="grouping-with-toggle" tabindex="-1">Grouping(With toggle) <a class="header-anchor" href="#grouping-with-toggle" aria-label="Permalink to &quot;Grouping(With toggle)&quot;">​</a></h2>`);
      _push(ssrRenderComponent(groupingWithToggle, null, null, _parent));
      _push(`<h2 id="customize-display-data" tabindex="-1">Customize display data <a class="header-anchor" href="#customize-display-data" aria-label="Permalink to &quot;Customize display data&quot;">​</a></h2>`);
      _push(ssrRenderComponent(cusDisplayData, null, null, _parent));
      _push(`<h2 id="filter" tabindex="-1">Filter <a class="header-anchor" href="#filter" aria-label="Permalink to &quot;Filter&quot;">​</a></h2>`);
      _push(ssrRenderComponent(Filter, null, null, _parent));
      _push(`<h2 id="asynchronous-filter" tabindex="-1">Asynchronous filter <a class="header-anchor" href="#asynchronous-filter" aria-label="Permalink to &quot;Asynchronous filter&quot;">​</a></h2>`);
      _push(ssrRenderComponent(asyncFilter, null, null, _parent));
      _push(`<h2 id="columns-filter" tabindex="-1">Columns filter <a class="header-anchor" href="#columns-filter" aria-label="Permalink to &quot;Columns filter&quot;">​</a></h2>`);
      _push(ssrRenderComponent(filterInTable, null, null, _parent));
      _push(`<h2 id="customize-style" tabindex="-1">Customize style <a class="header-anchor" href="#customize-style" aria-label="Permalink to &quot;Customize style&quot;">​</a></h2>`);
      _push(ssrRenderComponent(customizeStyle, null, null, _parent));
      _push(`<h2 id="customize-style-2" tabindex="-1">Customize style(2) <a class="header-anchor" href="#customize-style-2" aria-label="Permalink to &quot;Customize style(2)&quot;">​</a></h2>`);
      _push(ssrRenderComponent(customizeStyle2, null, null, _parent));
      _push(`<h2 id="customize-messages" tabindex="-1">Customize messages <a class="header-anchor" href="#customize-messages" aria-label="Permalink to &quot;Customize messages&quot;">​</a></h2>`);
      _push(ssrRenderComponent(customizeMessages, null, null, _parent));
      _push(`<h2 id="customize-page-s-dropdown" tabindex="-1">Customize page&#39;s dropdown <a class="header-anchor" href="#customize-page-s-dropdown" aria-label="Permalink to &quot;Customize page&#39;s dropdown&quot;">​</a></h2>`);
      _push(ssrRenderComponent(customizePageDropdown, null, null, _parent));
      _push(`<h2 id="catch-row-clicked" tabindex="-1">Catch row clicked <a class="header-anchor" href="#catch-row-clicked" aria-label="Permalink to &quot;Catch row clicked&quot;">​</a></h2>`);
      _push(ssrRenderComponent(catchRow, null, null, _parent));
      _push(`<h2 id="fixed-first-column-horizontal-scrolling" tabindex="-1">Fixed first column(Horizontal scrolling) <a class="header-anchor" href="#fixed-first-column-horizontal-scrolling" aria-label="Permalink to &quot;Fixed first column(Horizontal scrolling)&quot;">​</a></h2>`);
      _push(ssrRenderComponent(fixedFirstColumn, null, null, _parent));
      _push(`<h2 id="fixed-header-and-first-column-scrolling" tabindex="-1">Fixed header and first column(scrolling) <a class="header-anchor" href="#fixed-header-and-first-column-scrolling" aria-label="Permalink to &quot;Fixed header and first column(scrolling)&quot;">​</a></h2>`);
      _push(ssrRenderComponent(fixedHeaderAndFirstColumn, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("tw/advance-examples.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
