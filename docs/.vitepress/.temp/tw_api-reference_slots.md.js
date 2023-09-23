import { useSSRContext, resolveComponent, unref, withCtx, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { t as tw } from "./tw.3a3207ea.js";
const __pageData = JSON.parse('{"title":"Slots","description":"","frontmatter":{},"headers":[],"relativePath":"tw/api-reference/slots.md","filePath":"tw/api-reference/slots.md"}');
const __default__ = { name: "tw/api-reference/slots.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Badge = resolveComponent("Badge");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h1><p>This is optional. However, if you enable V-slot mode, you should be able to write it.</p><h3 id="tw-slots-field-name" tabindex="-1">${ssrInterpolate(unref(tw).slots_field_name)} <a class="header-anchor" href="#tw-slots-field-name" aria-label="Permalink to &quot;{{tw.slots_field_name}}&quot;">​</a></h3><ul><li>Description: `);
      _push(ssrRenderComponent(_component_Badge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(tw).slots_field_name_desc)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(tw).slots_field_name_desc), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-SPbqp" id="tab-X8At8mR" checked="checked"><label for="tab-X8At8mR">${ssrInterpolate(unref(tw).slots_field_name_usage1)}</label><input type="radio" name="group-SPbqp" id="tab-4tw2OVn"><label for="tab-4tw2OVn">${ssrInterpolate(unref(tw).slots_field_name_usage2)}</label></div><div class="blocks"><div class="language-vue vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F286C4" })}">template</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#62E884", "font-style": "italic" })}">v-slot</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">:</span><span style="${ssrRenderStyle({ "color": "#62E884", "font-style": "italic" })}">id</span><span style="${ssrRenderStyle({ "color": "#F286C4" })}">=</span><span style="${ssrRenderStyle({ "color": "#DEE492" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">data</span><span style="${ssrRenderStyle({ "color": "#DEE492" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#EE6666", "font-style": "italic", "text-decoration": "underline" })}">YourComponent</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&gt;{{ data.value.id }}&lt;/</span><span style="${ssrRenderStyle({ "color": "#EE6666", "font-style": "italic", "text-decoration": "underline" })}">YourComponent</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F286C4" })}">template</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F286C4" })}">template</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#62E884", "font-style": "italic" })}">v-slot</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">:</span><span style="${ssrRenderStyle({ "color": "#62E884", "font-style": "italic" })}">name</span><span style="${ssrRenderStyle({ "color": "#F286C4" })}">=</span><span style="${ssrRenderStyle({ "color": "#DEE492" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">data</span><span style="${ssrRenderStyle({ "color": "#DEE492" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#EE6666", "font-style": "italic", "text-decoration": "underline" })}">YourComponent</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&gt;{{ data.value.name }}&lt;/</span><span style="${ssrRenderStyle({ "color": "#EE6666", "font-style": "italic", "text-decoration": "underline" })}">YourComponent</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F286C4" })}">template</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F286C4" })}">template</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#62E884", "font-style": "italic" })}">v-slot</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">:</span><span style="${ssrRenderStyle({ "color": "#62E884", "font-style": "italic" })}">email</span><span style="${ssrRenderStyle({ "color": "#F286C4" })}">=</span><span style="${ssrRenderStyle({ "color": "#DEE492" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">data</span><span style="${ssrRenderStyle({ "color": "#DEE492" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#EE6666", "font-style": "italic", "text-decoration": "underline" })}">YourComponent</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&gt;{{ data.value.email }}&lt;/</span><span style="${ssrRenderStyle({ "color": "#EE6666", "font-style": "italic", "text-decoration": "underline" })}">YourComponent</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F286C4" })}">template</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#999999" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#1E754F" })}">template</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#59873A" })}">v-slot</span><span style="${ssrRenderStyle({ "color": "#999999" })}">:</span><span style="${ssrRenderStyle({ "color": "#59873A" })}">id</span><span style="${ssrRenderStyle({ "color": "#999999" })}">=</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}">data</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">  </span><span style="${ssrRenderStyle({ "color": "#999999" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#B31D28" })}">YourComponent</span><span style="${ssrRenderStyle({ "color": "#999999" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}">{{ data.value.id }}</span><span style="${ssrRenderStyle({ "color": "#999999" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#B31D28" })}">YourComponent</span><span style="${ssrRenderStyle({ "color": "#999999" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#999999" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#1E754F" })}">template</span><span style="${ssrRenderStyle({ "color": "#999999" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#999999" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#1E754F" })}">template</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#59873A" })}">v-slot</span><span style="${ssrRenderStyle({ "color": "#999999" })}">:</span><span style="${ssrRenderStyle({ "color": "#59873A" })}">name</span><span style="${ssrRenderStyle({ "color": "#999999" })}">=</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}">data</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">  </span><span style="${ssrRenderStyle({ "color": "#999999" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#B31D28" })}">YourComponent</span><span style="${ssrRenderStyle({ "color": "#999999" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}">{{ data.value.name }}</span><span style="${ssrRenderStyle({ "color": "#999999" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#B31D28" })}">YourComponent</span><span style="${ssrRenderStyle({ "color": "#999999" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#999999" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#1E754F" })}">template</span><span style="${ssrRenderStyle({ "color": "#999999" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#999999" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#1E754F" })}">template</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#59873A" })}">v-slot</span><span style="${ssrRenderStyle({ "color": "#999999" })}">:</span><span style="${ssrRenderStyle({ "color": "#59873A" })}">email</span><span style="${ssrRenderStyle({ "color": "#999999" })}">=</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}">data</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">  </span><span style="${ssrRenderStyle({ "color": "#999999" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#B31D28" })}">YourComponent</span><span style="${ssrRenderStyle({ "color": "#999999" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}">{{ data.value.email }}</span><span style="${ssrRenderStyle({ "color": "#999999" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#B31D28" })}">YourComponent</span><span style="${ssrRenderStyle({ "color": "#999999" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#999999" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#1E754F" })}">template</span><span style="${ssrRenderStyle({ "color": "#999999" })}">&gt;</span></span></code></pre></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F286C4" })}">template</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#F286C4" })}">v-for=</span><span style="${ssrRenderStyle({ "color": "#DEE492" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">(col, i) </span><span style="${ssrRenderStyle({ "color": "#F286C4" })}">of</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> table.columns</span><span style="${ssrRenderStyle({ "color": "#DEE492" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> </span><span style="${ssrRenderStyle({ "color": "#62E884", "font-style": "italic" })}">v-slot</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">:</span><span style="${ssrRenderStyle({ "color": "#F286C4" })}">[</span><span style="${ssrRenderStyle({ "color": "#62E884", "font-style": "italic" })}">col</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">.</span><span style="${ssrRenderStyle({ "color": "#62E884", "font-style": "italic" })}">field]</span><span style="${ssrRenderStyle({ "color": "#F286C4" })}">=</span><span style="${ssrRenderStyle({ "color": "#DEE492" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#E7EE98" })}">data</span><span style="${ssrRenderStyle({ "color": "#DEE492" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}"> :</span><span style="${ssrRenderStyle({ "color": "#62E884", "font-style": "italic" })}">key</span><span style="${ssrRenderStyle({ "color": "#F286C4" })}">=</span><span style="${ssrRenderStyle({ "color": "#DEE492" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">i</span><span style="${ssrRenderStyle({ "color": "#DEE492" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#EE6666", "font-style": "italic", "text-decoration": "underline" })}">YourComponent</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&gt;{{ data.value[col.field] }}&lt;/</span><span style="${ssrRenderStyle({ "color": "#EE6666", "font-style": "italic", "text-decoration": "underline" })}">YourComponent</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F286C4" })}">template</span><span style="${ssrRenderStyle({ "color": "#F6F6F4" })}">&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#999999" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#1E754F" })}">template</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#1E754F" })}">v-for</span><span style="${ssrRenderStyle({ "color": "#999999" })}">=</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">(</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}">col</span><span style="${ssrRenderStyle({ "color": "#999999" })}">,</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}">i</span><span style="${ssrRenderStyle({ "color": "#999999" })}">)</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}">of</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}">table</span><span style="${ssrRenderStyle({ "color": "#999999" })}">.</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}">columns</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#59873A" })}">v-slot</span><span style="${ssrRenderStyle({ "color": "#999999" })}">:[</span><span style="${ssrRenderStyle({ "color": "#59873A" })}">col</span><span style="${ssrRenderStyle({ "color": "#393A34" })}">.</span><span style="${ssrRenderStyle({ "color": "#59873A" })}">field</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}">]</span><span style="${ssrRenderStyle({ "color": "#999999" })}">=</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}">data</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#999999" })}">:</span><span style="${ssrRenderStyle({ "color": "#59873A" })}">key</span><span style="${ssrRenderStyle({ "color": "#999999" })}">=</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}">i</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">  </span><span style="${ssrRenderStyle({ "color": "#999999" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#B31D28" })}">YourComponent</span><span style="${ssrRenderStyle({ "color": "#999999" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}">{{ data.value[col.field] }}</span><span style="${ssrRenderStyle({ "color": "#999999" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#B31D28" })}">YourComponent</span><span style="${ssrRenderStyle({ "color": "#999999" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#999999" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#1E754F" })}">template</span><span style="${ssrRenderStyle({ "color": "#999999" })}">&gt;</span></span></code></pre></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("tw/api-reference/slots.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
