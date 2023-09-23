import {
  defineComponent,
  h,
  hasOwn,
  hyphenate
} from "./chunk-TU54KQDM.js";
import "./chunk-UXIASGQL.js";

// node_modules/vue-github-button/index.js
var vue_github_button_default = defineComponent({
  name: "github-button",
  props: {
    href: String,
    ariaLabel: String,
    title: String,
    dataIcon: String,
    dataColorScheme: String,
    dataSize: String,
    dataShowCount: String,
    dataText: String
  },
  render: function() {
    const props = { ref: "_" };
    for (const key in this.$props) {
      props[hyphenate(key)] = this.$props[key];
    }
    return h("span", [
      hasOwn(this.$slots, "default") ? h("a", props, this.$slots.default()) : h("a", props)
    ]);
  },
  mounted: function() {
    this.paint();
  },
  beforeUpdate: function() {
    this.reset();
  },
  updated: function() {
    this.paint();
  },
  beforeUnmount: function() {
    this.reset();
  },
  methods: {
    paint: function() {
      const _ = this.$el.appendChild(document.createElement("span"));
      const _this = this;
      import(
        /* webpackMode: "eager" */
        "./buttons.esm-D3M3OTVU.js"
      ).then(function(module) {
        module.render(_.appendChild(_this.$refs._), function(el) {
          try {
            _.parentNode.replaceChild(el, _);
          } catch (_2) {
          }
        });
      });
    },
    reset: function() {
      this.$el.replaceChild(this.$refs._, this.$el.lastChild);
    }
  }
});
export {
  vue_github_button_default as default
};
//# sourceMappingURL=vue-github-button.js.map
