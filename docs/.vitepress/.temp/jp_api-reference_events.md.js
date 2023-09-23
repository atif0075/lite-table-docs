import { useSSRContext, resolveComponent, unref, withCtx, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { j as jp } from "./jp.a11c2484.js";
const __pageData = JSON.parse('{"title":"{{ jp.events }}","description":"","frontmatter":{},"headers":[],"relativePath":"jp/api-reference/events.md","filePath":"jp/api-reference/events.md"}');
const __default__ = { name: "jp/api-reference/events.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Badge = resolveComponent("Badge");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jp-events" tabindex="-1">${ssrInterpolate(unref(jp).events)} <a class="header-anchor" href="#jp-events" aria-label="Permalink to &quot;{{ jp.events }}&quot;">​</a></h1><h2 id="do-search-jp-required" tabindex="-1">do-search `);
      _push(ssrRenderComponent(_component_Badge, { type: "danger" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(jp).required)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(jp).required), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` <a class="header-anchor" href="#do-search-jp-required" aria-label="Permalink to &quot;do-search &lt;Badge type=&quot;danger&quot; &gt;{{jp.required}}&lt;/Badge&gt;&quot;">​</a></h2><table><thead><tr><th>${ssrInterpolate(unref(jp).name)}</th><th>${ssrInterpolate(unref(jp).description)}</th><th>${ssrInterpolate(unref(jp).hint)}</th><th>${ssrInterpolate(unref(jp).type)}</th></tr></thead><tbody><tr><td>do-search</td><td>${ssrInterpolate(unref(jp).events_do_search_desc)}</td><td>${ssrInterpolate(unref(jp).events_do_search_hint)}efault mode, and in static mode, it&#39;s not.</td><td><code>(offset, limit, order, sort) =&gt; void</code></td></tr></tbody></table><details class="details custom-block"><summary>Arguments `);
      _push(ssrRenderComponent(_component_Badge, { type: "danger" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`All ${ssrInterpolate(unref(jp).required)}`);
          } else {
            return [
              createTextVNode("All " + toDisplayString(unref(jp).required), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</summary><table><thead><tr><th>Name</th><th>${ssrInterpolate(unref(jp).description)}</th><th>${ssrInterpolate(unref(jp).type)}</th></tr></thead><tbody><tr><td>offset</td><td>${ssrInterpolate(unref(jp).events_do_search_offset_desc)}</td><td>Number</td></tr><tr><td>limit</td><td>${ssrInterpolate(unref(jp).events_do_search_limit_desc)}</td><td>Number</td></tr><tr><td>order</td><td>${ssrInterpolate(unref(jp).events_do_search_order_desc)}</td><td>string</td></tr><tr><td>sort</td><td>${ssrInterpolate(unref(jp).events_do_search_order_desc)}</td><td>string</td></tr></tbody></table></details><h2 id="is-finished" tabindex="-1">is-finished <a class="header-anchor" href="#is-finished" aria-label="Permalink to &quot;is-finished&quot;">​</a></h2><table><thead><tr><th>Name</th><th>${ssrInterpolate(unref(jp).description)}</th><th>${ssrInterpolate(unref(jp).type)}</th></tr></thead><tbody><tr><td>is-finished</td><td>${ssrInterpolate(unref(jp).events_is_finished_desc)}</td><td>(elements) =&gt; void</td></tr></tbody></table><details class="details custom-block"><summary>Argument</summary><table><thead><tr><th>Name</th><th>${ssrInterpolate(unref(jp).description)}</th><th>${ssrInterpolate(unref(jp).type)}</th></tr></thead><tbody><tr><td>elements</td><td>${ssrInterpolate(unref(jp).events_is_finished_elements_desc)}</td><td>Array</td></tr></tbody></table></details><h2 id="return-checked-rows" tabindex="-1">return-checked-rows <a class="header-anchor" href="#return-checked-rows" aria-label="Permalink to &quot;return-checked-rows&quot;">​</a></h2><table><thead><tr><th>Name</th><th>${ssrInterpolate(unref(jp).description)}</th><th>${ssrInterpolate(unref(jp).type)}</th></tr></thead><tbody><tr><td>return-checked-rows</td><td>${ssrInterpolate(unref(jp).events_return_checked_rows_desc)}</td><td>(rowsKey) =&gt; void</td></tr></tbody></table><details class="details custom-block"><summary>Argument</summary><table><thead><tr><th>Name</th><th>${ssrInterpolate(unref(jp).description)}</th><th>${ssrInterpolate(unref(jp).type)}</th></tr></thead><tbody><tr><td>elements</td><td>${ssrInterpolate(unref(jp).events_is_finished_elements_desc)}</td><td>Number</td></tr></tbody></table></details><h2 id="get-now-page" tabindex="-1">get-now-page <a class="header-anchor" href="#get-now-page" aria-label="Permalink to &quot;get-now-page&quot;">​</a></h2><table><thead><tr><th>Name</th><th>${ssrInterpolate(unref(jp).description)}</th><th>${ssrInterpolate(unref(jp).type)}</th></tr></thead><tbody><tr><td>get-now-page</td><td>${ssrInterpolate(unref(jp).events_get_now_page_desc)}</td><td>(pageNo) =&gt; void</td></tr></tbody></table><details class="details custom-block"><summary>Argument</summary><table><thead><tr><th>Name</th><th>${ssrInterpolate(unref(jp).description)}</th><th>${ssrInterpolate(unref(jp).type)}</th></tr></thead><tbody><tr><td>pageNo</td><td>${ssrInterpolate(unref(jp).events_get_now_page_pageNo_desc)}</td><td>Number</td></tr></tbody></table></details><h2 id="row-clicked" tabindex="-1">row-clicked <a class="header-anchor" href="#row-clicked" aria-label="Permalink to &quot;row-clicked&quot;">​</a></h2><table><thead><tr><th>Name</th><th>${ssrInterpolate(unref(jp).description)}</th><th>${ssrInterpolate(unref(jp).type)}</th></tr></thead><tbody><tr><td>row-clicked</td><td>${ssrInterpolate(unref(jp).events_row_clicked_desc)}</td><td>(rowData) =&gt; void</td></tr></tbody></table><details class="details custom-block"><summary>Argument</summary><table><thead><tr><th>Name</th><th>${ssrInterpolate(unref(jp).description)}</th><th>${ssrInterpolate(unref(jp).type)}</th></tr></thead><tbody><tr><td>rowData</td><td>${ssrInterpolate(unref(jp).events_row_clicked_rowData_desc)}</td><td>Object</td></tr></tbody></table></details><h2 id="row-toggled" tabindex="-1">row-toggled <a class="header-anchor" href="#row-toggled" aria-label="Permalink to &quot;row-toggled&quot;">​</a></h2><table><thead><tr><th>Name</th><th>${ssrInterpolate(unref(jp).description)}</th><th>${ssrInterpolate(unref(jp).type)}</th></tr></thead><tbody><tr><td>row-toggled</td><td>${ssrInterpolate(unref(jp).events_row_toggled_desc)}</td><td>(rows, isCollapsed) =&gt; void</td></tr></tbody></table><details class="details custom-block"><summary>Arguments</summary><table><thead><tr><th>Name</th><th>${ssrInterpolate(unref(jp).description)}</th><th>${ssrInterpolate(unref(jp).type)}</th></tr></thead><tbody><tr><td>row</td><td>${ssrInterpolate(unref(jp).events_row_clicked_rowData_desc)}</td><td>Array</td></tr><tr><td>isCollapsed</td><td>${ssrInterpolate(unref(jp).events_row_toggled_is_collapsed_desc)}</td><td>Boolean</td></tr></tbody></table></details></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("jp/api-reference/events.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
