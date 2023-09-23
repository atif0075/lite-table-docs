import { useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { e as en } from "./en.9fdf07e8.js";
const __pageData = JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[],"relativePath":"getting-started.md","filePath":"getting-started.md"}');
const __default__ = { name: "getting-started.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><p>${ssrInterpolate(unref(en).component_description)}</p><h2 id="en-install" tabindex="-1">${ssrInterpolate(unref(en).install)} <a class="header-anchor" href="#en-install" aria-label="Permalink to &quot;{{en.install}}&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-30HSg" id="tab-DrUEVfv" checked="checked"><label for="tab-DrUEVfv">npm</label><input type="radio" name="group-30HSg" id="tab-tzlFx7F"><label for="tab-tzlFx7F">yarn</label><input type="radio" name="group-30HSg" id="tab-jUJvQF3"><label for="tab-jUJvQF3">pnpm</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#62E884" })}">$</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">npm</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">install</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">vue3-table-lite</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#BF9EEE" })}">--save</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#59873A" })}">$</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">npm</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">install</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">vue3-table-lite</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}">--save</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#62E884" })}">$</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">yarn</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">add</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">vue3-table-lite</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#59873A" })}">$</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">yarn</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">add</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">vue3-table-lite</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#62E884" })}">$</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">pnpm</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">add</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">vue3-table-lite</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#59873A" })}">$</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">pnpm</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">add</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">vue3-table-lite</span></span></code></pre></div></div></div><h2 id="en-include" tabindex="-1">${ssrInterpolate(unref(en).include)} <a class="header-anchor" href="#en-include" aria-label="Permalink to &quot;{{en.include}}&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-xqEdi" id="tab-b7fQHCI" checked="checked"><label for="tab-b7fQHCI">JavaScript</label><input type="radio" name="group-xqEdi" id="tab-gIP3iyN"><label for="tab-gIP3iyN">TypeScript</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#F286C4" })}">import</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> VueTableLite </span><span style="${ssrRenderStyle({ "color": "#F286C4" })}">from</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#DEE492" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">vue3-table-lite</span><span style="${ssrRenderStyle({ "color": "#DEE492" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#1E754F" })}">import</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}">VueTableLite</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#1E754F" })}">from</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}">vue3-table-lite</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#F286C4" })}">import</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> VueTableLite </span><span style="${ssrRenderStyle({ "color": "#F286C4" })}">from</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#DEE492" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">vue3-table-lite/ts</span><span style="${ssrRenderStyle({ "color": "#DEE492" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#1E754F" })}">import</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}">VueTableLite</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#1E754F" })}">from</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}">vue3-table-lite/ts</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">;</span></span></code></pre></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("getting-started.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
