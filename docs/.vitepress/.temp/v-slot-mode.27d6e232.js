import { defineComponent, reactive, useSSRContext, resolveComponent, mergeProps, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode } from "vue";
import TableLite from "vue3-table-lite";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const sampleData1 = (offst, limit) => {
  offst = offst + 1;
  let data = [];
  for (let i = offst; i <= limit; i++) {
    data.push({
      id: i,
      name: "TEST" + i,
      email: "test" + i + "@example.com"
    });
  }
  return data;
};
const sampleData2 = (offst, limit) => {
  let data = [];
  for (let i = limit; i > offst; i--) {
    data.push({
      id: i,
      name: "TEST" + i,
      email: "test" + i + "@example.com"
    });
  }
  return data;
};
const _sfc_main$3 = defineComponent({
  name: "App",
  components: { TableLite },
  setup() {
    const table = reactive({
      isLoading: false,
      columns: [
        {
          label: "ID",
          field: "id",
          width: "3%",
          sortable: true,
          isKey: true
        },
        {
          label: "Name",
          field: "name",
          width: "10%",
          sortable: true
        },
        {
          label: "Email",
          field: "email",
          width: "15%",
          sortable: true
        }
      ],
      rows: [],
      totalRecordCount: 0,
      sortable: {
        order: "id",
        sort: "asc"
      }
    });
    const doSearch = (offset, limit, order, sort) => {
      table.isLoading = true;
      setTimeout(() => {
        table.isReSearch = offset == void 0 ? true : false;
        if (offset >= 10 || limit >= 20) {
          limit = 20;
        }
        if (sort == "asc") {
          table.rows = sampleData1(offset, limit);
        } else {
          table.rows = sampleData2(offset, limit);
        }
        table.totalRecordCount = 20;
        table.sortable.order = order;
        table.sortable.sort = sort;
      }, 600);
    };
    doSearch(0, 10, "id", "asc");
    return {
      table,
      doSearch
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_table_lite = resolveComponent("table-lite");
  _push(ssrRenderComponent(_component_table_lite, mergeProps({
    "is-loading": _ctx.table.isLoading,
    columns: _ctx.table.columns,
    rows: _ctx.table.rows,
    total: _ctx.table.totalRecordCount,
    sortable: _ctx.table.sortable,
    messages: _ctx.table.messages,
    onDoSearch: _ctx.doSearch,
    onIsFinished: ($event) => _ctx.table.isLoading = false
  }, _attrs), null, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("code/simple-examples/default-mode.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const DefaultMode = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const staticMode_vue_vue_type_style_index_0_scoped_40ab4762_lang = "";
const _sfc_main$2 = {
  __name: "static-mode",
  __ssrInlineRender: true,
  setup(__props) {
    const data = reactive([]);
    for (let i = 0; i < 126; i++) {
      data.push({
        id: i,
        name: "TEST" + i,
        email: "test" + i + "@example.com"
      });
    }
    const table = reactive({
      columns: [
        {
          label: "ID",
          field: "id",
          width: "3%",
          sortable: true,
          isKey: true
        },
        {
          label: "Name",
          field: "name",
          width: "10%",
          sortable: true
        },
        {
          label: "Email",
          field: "email",
          width: "15%",
          sortable: true
        }
      ],
      rows: data,
      totalRecordCount: computed(() => {
        return table.rows.length;
      }),
      sortable: {
        order: "id",
        sort: "asc"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "z-10" }, _attrs))} data-v-40ab4762>`);
      _push(ssrRenderComponent(unref(TableLite), {
        "is-static-mode": true,
        columns: table.columns,
        rows: table.rows,
        total: table.totalRecordCount,
        sortable: table.sortable
      }, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("code/simple-examples/static-mode.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const staticMode = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-40ab4762"]]);
const _sfc_main$1 = defineComponent({
  name: "test-component"
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({ href: "#" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</a>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("code/simple-examples/Test.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Test = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const vSlotMode_vue_vue_type_style_index_0_scoped_e045c792_lang = "";
const _sfc_main = {
  __name: "v-slot-mode",
  __ssrInlineRender: true,
  setup(__props) {
    const sampleData12 = (offst, limit) => {
      offst = offst + 1;
      let data = [];
      for (let i = offst; i <= limit; i++) {
        data.push({
          id: i,
          name: "TEST" + i,
          email: "test" + i + "@example.com"
        });
      }
      return data;
    };
    const sampleData22 = (offst, limit) => {
      let data = [];
      for (let i = limit; i > offst; i--) {
        data.push({
          id: i,
          name: "TEST" + i,
          email: "test" + i + "@example.com"
        });
      }
      return data;
    };
    const table = reactive({
      isLoading: false,
      columns: [
        {
          label: "ID",
          field: "id",
          width: "3%",
          sortable: true,
          isKey: true
        },
        {
          label: "Name",
          field: "name",
          width: "10%",
          sortable: true
        },
        {
          label: "Email",
          field: "email",
          width: "15%",
          sortable: true
        }
      ],
      rows: [],
      totalRecordCount: 0,
      sortable: {
        order: "id",
        sort: "asc"
      }
    });
    const doSearch = (offset, limit, order, sort) => {
      table.isLoading = true;
      setTimeout(() => {
        table.isReSearch = offset == void 0 ? true : false;
        if (offset >= 10 || limit >= 20) {
          limit = 20;
        }
        if (sort == "asc") {
          table.rows = sampleData12(offset, limit);
        } else {
          table.rows = sampleData22(offset, limit);
        }
        table.totalRecordCount = 20;
        table.sortable.order = order;
        table.sortable.sort = sort;
      }, 600);
    };
    doSearch(0, 10, "id", "asc");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "z-10" }, _attrs))} data-v-e045c792>`);
      _push(ssrRenderComponent(unref(TableLite), {
        "is-slot-mode": true,
        "is-loading": table.isLoading,
        columns: table.columns,
        rows: table.rows,
        total: table.totalRecordCount,
        sortable: table.sortable,
        onDoSearch: doSearch,
        onIsFinished: ($event) => table.isLoading = false
      }, {
        name: withCtx((data, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Test, { class: "!text-green-500" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(data.value.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(data.value.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Test, { class: "!text-green-500" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(data.value.name), 1)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("code/simple-examples/v-slot-mode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vslotmode = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e045c792"]]);
export {
  DefaultMode as D,
  staticMode as s,
  vslotmode as v
};
