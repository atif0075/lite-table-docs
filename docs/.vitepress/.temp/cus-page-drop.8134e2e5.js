import { useSSRContext, reactive, mergeProps, unref, ref, computed, watch, defineComponent, createApp, h, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import TableLite from "vue3-table-lite";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const cusDisplayData_vue_vue_type_style_index_0_scoped_893760e4_lang = "";
const _sfc_main$c = {
  __name: "cus-display-data",
  __ssrInlineRender: true,
  setup(__props) {
    const sampleData12 = (offst, limit) => {
      offst = offst + 1;
      let data2 = [];
      for (let i = offst; i <= limit; i++) {
        data2.push({
          id: i,
          name: "TEST" + i,
          email: "test" + i + "@example.com"
        });
      }
      return data2;
    };
    const sampleData22 = (offst, limit) => {
      let data2 = [];
      for (let i = limit; i > offst; i--) {
        data2.push({
          id: i,
          name: "TEST" + i,
          email: "test" + i + "@example.com"
        });
      }
      return data2;
    };
    const table = reactive({
      isLoading: false,
      isReSearch: false,
      rowClasses: (row) => {
        if (row.id == 1) {
          return ["aaa", "is-id-one"];
        }
        return ["bbb", "other"];
      },
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
          sortable: true,
          display: function(row) {
            return '<a href="javascript:void(0)" data-id="' + row.id + '" class="is-rows-el name-btn text-green">' + row.name + "</a>";
          }
        },
        {
          label: "Email",
          field: "email",
          width: "15%",
          sortable: true
        },
        {
          label: "",
          field: "quick",
          width: "10%",
          display: function(row) {
            return '<button type="button" data-id="' + row.id + '" class="is-rows-el quick-btn bg-secondary px-4 py-2  text-white rounded">Button</button>';
          }
        }
      ],
      rows: [],
      totalRecordCount: 0,
      sortable: {
        order: "id",
        sort: "asc"
      },
      messages: {
        pagingInfo: "Showing {0}-{1} of {2}",
        pageSizeChangeLabel: "Row count:",
        gotoPageLabel: "Go to page:",
        noDataAvailable: "No data"
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
    const tableLoadingFinish = (elements) => {
      table.isLoading = false;
      Array.prototype.forEach.call(elements, function(element) {
        if (element.classList.contains("name-btn")) {
          element.addEventListener("click", function() {
            console.log(this.dataset.id + " name-btn click!!");
          });
        }
        if (element.classList.contains("quick-btn")) {
          element.addEventListener("click", function() {
            console.log(this.dataset.id + " quick-btn click!!");
          });
        }
      });
    };
    const updateCheckedRows = (rowsKey) => {
      console.log(rowsKey);
    };
    doSearch(0, 10, "id", "asc");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "z-10" }, _attrs))} data-v-893760e4>`);
      _push(ssrRenderComponent(unref(TableLite), {
        "has-checkbox": true,
        "is-loading": table.isLoading,
        "is-re-search": table.isReSearch,
        columns: table.columns,
        rows: table.rows,
        rowClasses: table.rowClasses,
        total: table.totalRecordCount,
        sortable: table.sortable,
        messages: table.messages,
        onDoSearch: doSearch,
        onIsFinished: tableLoadingFinish,
        onReturnCheckedRows: updateCheckedRows
      }, null, _parent));
      _push(`<div class="mt-5" data-v-893760e4><button data-v-893760e4><a target="_blank" class="bg-secondary px-4 py-2 flex items-center" href="https://github.com/linmasahiro/vue3-table-lite/blob/master/src/examples/CustomizeDisplayData.vue" data-v-893760e4><p class="text-base font-semibold pr-1" data-v-893760e4>View Source</p></a></button></div></main>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("code/advance-examples/cus-display-data.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const cusDisplayData = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-893760e4"]]);
const filter_vue_vue_type_style_index_0_scoped_783cb199_lang = "";
const _sfc_main$b = {
  __name: "filter",
  __ssrInlineRender: true,
  setup(__props) {
    const searchTerm3 = ref("");
    const data2 = reactive([]);
    for (let i = 0; i < 126; i++) {
      data2.push({
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
      rows: computed(() => {
        return data2.filter(
          (x) => x.email.toLowerCase().includes(searchTerm3.value.toLowerCase()) || x.name.toLowerCase().includes(searchTerm3.value.toLowerCase())
        );
      }),
      totalRecordCount: computed(() => {
        return table.rows.length;
      }),
      sortable: {
        order: "id",
        sort: "asc"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "z-10" }, _attrs))} data-v-783cb199><div data-v-783cb199><label class="text-sm font-semibold" data-v-783cb199>SearchBy:</label><input class="outline-none border px-2 border-green border-dashed border-opacity-30 h-10 my-2 bg-secondary w-full"${ssrRenderAttr("value", searchTerm3.value)} data-v-783cb199></div>`);
      _push(ssrRenderComponent(unref(TableLite), {
        "is-static-mode": true,
        columns: table.columns,
        rows: table.rows,
        total: table.totalRecordCount,
        sortable: table.sortable
      }, null, _parent));
      _push(`<div class="mt-5" data-v-783cb199><button data-v-783cb199><a target="_blank" class="bg-secondary px-4 py-2 flex items-center" href="https://github.com/linmasahiro/vue3-table-lite/blob/master/src/examples/Filter.vue" data-v-783cb199><p class="text-base font-semibold pr-1" data-v-783cb199>View Source</p></a></button></div></main>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("code/advance-examples/filter.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Filter = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-783cb199"]]);
const asyncFilter_vue_vue_type_style_index_0_scoped_f6671579_lang = "";
const _sfc_main$a = {
  __name: "async-filter",
  __ssrInlineRender: true,
  setup(__props) {
    const searchTerm3 = ref("");
    const data2 = reactive({
      rows: []
    });
    const myRequest = async (keyword) => {
      const fakeData = [];
      for (let i = 0; i < 126; i++) {
        fakeData.push({
          id: i,
          name: "TEST" + i,
          email: "test" + i + "@example.com"
        });
      }
      return await new Promise((resolve, reject) => {
        try {
          table.isLoading = true;
          setTimeout(() => {
            table.isLoading = false;
            let newData = fakeData.filter(
              (x) => x.email.toLowerCase().includes(keyword.toLowerCase()) || x.name.toLowerCase().includes(keyword.toLowerCase())
            );
            resolve(newData);
          }, 2e3);
        } catch (error) {
          console.log("Fetch error", error);
          reject();
        }
      });
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
      rows: computed(() => {
        return data2.rows;
      }),
      totalRecordCount: computed(() => {
        return table.rows.length;
      }),
      sortable: {
        order: "id",
        sort: "asc"
      }
    });
    watch(
      () => searchTerm3.value,
      (val) => {
        myRequest(val).then((newData) => {
          data2.rows = newData;
        });
      }
    );
    myRequest("").then((newData) => {
      data2.rows = newData;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "z-10" }, _attrs))} data-v-f6671579><div data-v-f6671579><label class="text-sm font-semibold" data-v-f6671579>SearchBy:</label><input class="outline-none border border-green border-dashed border-opacity-30 h-10 my-2 px-2 bg-secondary w-full"${ssrRenderAttr("value", searchTerm3.value)} data-v-f6671579></div>`);
      _push(ssrRenderComponent(unref(TableLite), {
        "is-static-mode": true,
        "is-loading": table.isLoading,
        columns: table.columns,
        rows: table.rows,
        total: table.totalRecordCount,
        sortable: table.sortable
      }, null, _parent));
      _push(`<div class="mt-5" data-v-f6671579><button data-v-f6671579><a target="_blank" class="bg-secondary px-4 py-2 flex items-center" href="https://github.com/linmasahiro/vue3-table-lite/blob/master/src/examples/Filter2.vue" data-v-f6671579><p class="text-base font-semibold pr-1" data-v-f6671579>View Source</p></a></button></div></main>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("code/advance-examples/async-filter.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const asyncFilter = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-f6671579"]]);
const catchRow_vue_vue_type_style_index_0_scoped_d52ce54b_lang = "";
const _sfc_main$9 = {
  __name: "catch-row",
  __ssrInlineRender: true,
  setup(__props) {
    const sampleData12 = (offst, limit) => {
      offst = offst + 1;
      let data2 = [];
      for (let i = offst; i <= limit; i++) {
        data2.push({
          id: i,
          name: "TEST" + i,
          email: "test" + i + "@example.com"
        });
      }
      return data2;
    };
    const sampleData22 = (offst, limit) => {
      let data2 = [];
      for (let i = limit; i > offst; i--) {
        data2.push({
          id: i,
          name: "TEST" + i,
          email: "test" + i + "@example.com"
        });
      }
      return data2;
    };
    const table = reactive({
      isLoading: false,
      isReSearch: false,
      rowClasses: (row) => {
        if (row.id == 1) {
          return ["aaa", "is-id-one"];
        }
        return ["bbb", "other"];
      },
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
          sortable: true,
          display: function(row) {
            return '<a href="javascript:void(0)" data-id="' + row.id + '" class="is-rows-el name-btn">' + row.name + "</a>";
          }
        },
        {
          label: "Email",
          field: "email",
          width: "15%",
          sortable: true
        },
        {
          label: "",
          field: "quick",
          width: "10%",
          display: function(row) {
            return '<button type="button" data-id="' + row.id + '" class="is-rows-el quick-btn">Button</button>';
          }
        }
      ],
      rows: [],
      totalRecordCount: 0,
      sortable: {
        order: "id",
        sort: "asc"
      },
      messages: {
        pagingInfo: "Showing {0}-{1} of {2}",
        pageSizeChangeLabel: "Row count:",
        gotoPageLabel: "Go to page:",
        noDataAvailable: "No data"
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
    const tableLoadingFinish = (elements) => {
      table.isLoading = false;
      Array.prototype.forEach.call(elements, function(element) {
        if (element.classList.contains("name-btn")) {
          element.addEventListener("click", function(event) {
            event.stopPropagation();
            console.log(this.dataset.id + " name-btn click!!");
          });
        }
        if (element.classList.contains("quick-btn")) {
          element.addEventListener("click", function(event) {
            event.stopPropagation();
            console.log(this.dataset.id + " quick-btn click!!");
          });
        }
      });
    };
    const updateCheckedRows = (rowsKey) => {
      console.log(rowsKey);
    };
    doSearch(0, 10, "id", "asc");
    const rowClicked = (row) => {
      console.log("Row clicked!", row);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><main class="z-10" data-v-d52ce54b>`);
      _push(ssrRenderComponent(unref(TableLite), {
        "has-checkbox": true,
        "is-loading": table.isLoading,
        "is-re-search": table.isReSearch,
        columns: table.columns,
        rows: table.rows,
        rowClasses: table.rowClasses,
        total: table.totalRecordCount,
        sortable: table.sortable,
        messages: table.messages,
        onDoSearch: doSearch,
        onIsFinished: tableLoadingFinish,
        onReturnCheckedRows: updateCheckedRows,
        onRowClicked: rowClicked
      }, null, _parent));
      _push(`</main><div class="mt-5" data-v-d52ce54b><button data-v-d52ce54b><a target="_blank" class="bg-secondary px-4 py-2 flex items-center" href="https://github.com/linmasahiro/vue3-table-lite/blob/master/src/examples/RowClicked.vue" data-v-d52ce54b><p class="text-base font-semibold pr-1" data-v-d52ce54b>View Source</p></a></button></div><!--]-->`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("code/advance-examples/catch-row.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const catchRow = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-d52ce54b"]]);
const filterInTable_vue_vue_type_style_index_0_scoped_33edc918_lang = "";
const searchTerm = ref("");
const searchTerm2 = ref("");
const data = reactive([]);
for (let i = 1; i < 126; i++) {
  data.push({
    id: i,
    name: "TEST" + i,
    email: "test" + i + "@example.com"
  });
}
const _sfc_main$8 = defineComponent({
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
      rows: computed(() => {
        return data.filter(
          (x) => x.email.toLowerCase().includes(searchTerm2.value.toLowerCase()) && x.name.toLowerCase().includes(searchTerm.value.toLowerCase())
        );
      }),
      totalRecordCount: computed(() => {
        return table.rows.length;
      }),
      sortable: {
        order: "id",
        sort: "asc"
      }
    });
    const initTable = ({ el: tableComponent }) => {
      let headerTr = tableComponent.getElementsByClassName("vtl-thead-tr");
      if (!headerTr[0]) {
        return;
      }
      let cloneTr = headerTr[0].cloneNode(true);
      let childTh = cloneTr.getElementsByClassName("vtl-thead-th");
      for (let i = 0; i < childTh.length; i++) {
        childTh[i].innerHTML = "";
      }
      createApp(
        defineComponent({
          setup() {
            return () => h("input", {
              style: "color: black;",
              value: searchTerm.value,
              onInput: (e) => {
                searchTerm.value = e.target.value;
              }
            });
          }
        })
      ).mount(childTh[1]);
      createApp(
        defineComponent({
          setup() {
            return () => h("input", {
              style: "color: black;",
              value: searchTerm2.value,
              onInput: (e) => {
                searchTerm2.value = e.target.value;
              }
            });
          }
        })
      ).mount(childTh[2]);
      headerTr[0].after(cloneTr);
    };
    return {
      searchTerm,
      searchTerm2,
      table,
      initTable
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_table_lite = resolveComponent("table-lite");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "z-10" }, _attrs))} data-v-33edc918>`);
  _push(ssrRenderComponent(_component_table_lite, {
    "is-static-mode": true,
    columns: _ctx.table.columns,
    rows: _ctx.table.rows,
    total: _ctx.table.totalRecordCount,
    sortable: _ctx.table.sortable,
    onVnodeMounted: _ctx.initTable
  }, null, _parent));
  _push(`<div class="mt-5" data-v-33edc918><button data-v-33edc918><a target="_blank" class="bg-secondary px-4 py-2 flex items-center" href="https://github.com/linmasahiro/vue3-table-lite/blob/master/src/examples/Filter3.vue" data-v-33edc918><p class="text-base font-semibold pr-1" data-v-33edc918>View Source</p></a></button></div></main>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("code/advance-examples/filter-in-table.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const filterInTable = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-33edc918"]]);
const fixedFirstColumn_vue_vue_type_style_index_0_scoped_b73c9777_lang = "";
const fixedFirstColumn_vue_vue_type_style_index_1_lang = "";
const sampleData1$2 = (offst, limit) => {
  offst = offst + 1;
  let data2 = [];
  for (let i = offst; i <= limit; i++) {
    data2.push({
      id: i,
      name: "TEST" + i,
      email: "test" + i + "@example.com"
    });
  }
  return data2;
};
const sampleData2$2 = (offst, limit) => {
  let data2 = [];
  for (let i = limit; i > offst; i--) {
    data2.push({
      id: i,
      name: "TEST" + i,
      email: "test" + i + "@example.com"
    });
  }
  return data2;
};
const _sfc_main$7 = defineComponent({
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
        },
        {
          label: "Email",
          field: "email",
          width: "15%",
          sortable: true
        },
        {
          label: "Email",
          field: "email",
          width: "15%",
          sortable: true
        },
        {
          label: "Email",
          field: "email",
          width: "15%",
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
          table.rows = sampleData1$2(offset, limit);
        } else {
          table.rows = sampleData2$2(offset, limit);
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
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_table_lite = resolveComponent("table-lite");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_table_lite, {
    "is-fixed-first-column": true,
    "is-loading": _ctx.table.isLoading,
    columns: _ctx.table.columns,
    rows: _ctx.table.rows,
    total: _ctx.table.totalRecordCount,
    sortable: _ctx.table.sortable,
    messages: _ctx.table.messages,
    onDoSearch: _ctx.doSearch,
    onIsFinished: ($event) => _ctx.table.isLoading = false
  }, null, _parent));
  _push(`<div class="mt-5" data-v-b73c9777><button data-v-b73c9777><a target="_blank" class="bg-secondary px-4 py-2 flex items-center" href="https://github.com/linmasahiro/vue3-table-lite/blob/master/src/examples/FixedFirstColumn.vue" data-v-b73c9777><p class="text-base font-semibold pr-1" data-v-b73c9777>View Source</p></a></button></div><!--]-->`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("code/advance-examples/fixed-first-column.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const fixedFirstColumn = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-b73c9777"]]);
const fixedHeaderAndFirstColumn_vue_vue_type_style_index_0_scoped_e752b0cb_lang = "";
const fixedHeaderAndFirstColumn_vue_vue_type_style_index_1_lang = "";
const sampleData1$1 = (offst, limit) => {
  offst = offst + 1;
  let data2 = [];
  for (let i = offst; i <= limit; i++) {
    data2.push({
      id: i,
      name: "TEST" + i,
      email: "test" + i + "@example.com"
    });
  }
  return data2;
};
const sampleData2$1 = (offst, limit) => {
  let data2 = [];
  for (let i = limit; i > offst; i--) {
    data2.push({
      id: i,
      name: "TEST" + i,
      email: "test" + i + "@example.com"
    });
  }
  return data2;
};
const _sfc_main$6 = defineComponent({
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
        },
        {
          label: "Email",
          field: "email",
          width: "15%",
          sortable: true
        },
        {
          label: "Email",
          field: "email",
          width: "15%",
          sortable: true
        },
        {
          label: "Email",
          field: "email",
          width: "15%",
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
          table.rows = sampleData1$1(offset, limit);
        } else {
          table.rows = sampleData2$1(offset, limit);
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
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_table_lite = resolveComponent("table-lite");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_table_lite, {
    "is-fixed-first-column": true,
    "max-height": 300,
    "is-loading": _ctx.table.isLoading,
    columns: _ctx.table.columns,
    rows: _ctx.table.rows,
    total: _ctx.table.totalRecordCount,
    sortable: _ctx.table.sortable,
    messages: _ctx.table.messages,
    onDoSearch: _ctx.doSearch,
    onIsFinished: ($event) => _ctx.table.isLoading = false
  }, null, _parent));
  _push(`<div class="mt-5" data-v-e752b0cb><button data-v-e752b0cb><a target="_blank" class="bg-secondary px-4 py-2 flex items-center" href="https://github.com/linmasahiro/vue3-table-lite/blob/master/src/examples/FixedHeaderAndFirstColumn.vue" data-v-e752b0cb><p class="text-base font-semibold pr-1" data-v-e752b0cb>View Source</p></a></button></div><!--]-->`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("code/advance-examples/fixed-header-and-first-column.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const fixedHeaderAndFirstColumn = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-e752b0cb"]]);
const grouping_vue_vue_type_style_index_0_scoped_c16a4d97_lang = "";
const grouping_vue_vue_type_style_index_1_lang = "";
const sampleData1 = (offst, limit) => {
  offst = offst + 1;
  let data2 = [];
  for (let i = offst; i <= limit; i++) {
    data2.push({
      id: i,
      name: "TEST" + i,
      email: "test" + i + "@example.com"
    });
  }
  data2.push({
    id: 22,
    name: "TEST2",
    email: "testGGG@example.com"
  });
  return data2;
};
const sampleData2 = (offst, limit) => {
  let data2 = [];
  for (let i = limit; i > offst; i--) {
    data2.push({
      id: i,
      name: "TEST" + i,
      email: "test" + i + "@example.com"
    });
  }
  data2.push({
    id: 22,
    name: "TEST2",
    email: "testGGG@example.com"
  });
  return data2;
};
const _sfc_main$5 = defineComponent({
  name: "App",
  components: { TableLite },
  setup() {
    const table = reactive({
      isLoading: false,
      isReSearch: false,
      rowClasses: (row) => {
        if (row.id == 1) {
          return ["aaa", "is-id-one"];
        }
        return ["bbb", "other"];
      },
      groupingKey: "name",
      hasGroupToggle: true,
      groupingDisplay: function(key) {
        return '<span style="background: darkgray; padding: 5px; border-radius: 5px;">' + key + "</span>";
      },
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
          sortable: true,
          display: function(row) {
            return '<a href="javascript:void(0)" data-id="' + row.id + '" class="is-rows-el name-btn">' + row.name + "</a>";
          }
        },
        {
          label: "Email",
          field: "email",
          width: "15%",
          sortable: true
        },
        {
          label: "",
          field: "quick",
          width: "10%",
          display: function(row) {
            return '<button type="button" data-id="' + row.id + '" class="is-rows-el quick-btn">Button</button>';
          }
        }
      ],
      rows: [],
      totalRecordCount: 0,
      sortable: {
        order: "id",
        sort: "asc"
      },
      messages: {
        pagingInfo: "Showing {0}-{1} of {2}",
        pageSizeChangeLabel: "Row count:",
        gotoPageLabel: "Go to page:",
        noDataAvailable: "No data"
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
    const tableLoadingFinish = (elements) => {
      table.isLoading = false;
      Array.prototype.forEach.call(elements, function(element) {
        if (element.classList.contains("name-btn")) {
          element.addEventListener("click", function(event) {
            event.stopPropagation();
            console.log(this.dataset.id + " name-btn click!!");
          });
        }
        if (element.classList.contains("quick-btn")) {
          element.addEventListener("click", function(event) {
            event.stopPropagation();
            console.log(this.dataset.id + " quick-btn click!!");
          });
        }
      });
    };
    const updateCheckedRows = (rowsKey) => {
      console.log(rowsKey);
    };
    doSearch(0, 10, "id", "asc");
    const rowClicked = (row) => {
      console.log("Row clicked!", row);
    };
    const toggled = (rows, isCollapsed) => {
      console.log("Row toggled", rows, isCollapsed);
    };
    return {
      table,
      doSearch,
      tableLoadingFinish,
      updateCheckedRows,
      rowClicked,
      toggled
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_table_lite = resolveComponent("table-lite");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_table_lite, {
    "has-checkbox": true,
    "is-loading": _ctx.table.isLoading,
    "is-re-search": _ctx.table.isReSearch,
    "start-collapsed": true,
    "is-keep-collapsed": true,
    "grouping-key": _ctx.table.groupingKey,
    "has-group-toggle": _ctx.table.hasGroupToggle,
    "grouping-display": _ctx.table.groupingDisplay,
    columns: _ctx.table.columns,
    rows: _ctx.table.rows,
    rowClasses: _ctx.table.rowClasses,
    total: _ctx.table.totalRecordCount,
    sortable: _ctx.table.sortable,
    messages: _ctx.table.messages,
    onDoSearch: _ctx.doSearch,
    onIsFinished: _ctx.tableLoadingFinish,
    onReturnCheckedRows: _ctx.updateCheckedRows,
    onRowClicked: _ctx.rowClicked,
    onRowToggled: _ctx.toggled
  }, null, _parent));
  _push(`<div class="mt-5" data-v-c16a4d97><button data-v-c16a4d97><a target="_blank" class="bg-secondary px-4 py-2 flex items-center" href="https://github.com/linmasahiro/vue3-table-lite/blob/master/src/examples/Grouping.vue" data-v-c16a4d97><p class="text-base font-semibold pr-1" data-v-c16a4d97>View Source</p></a></button></div><!--]-->`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("code/advance-examples/grouping.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const groupingWithToggle = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c16a4d97"]]);
const grouping2_vue_vue_type_style_index_0_scoped_2c40de20_lang = "";
const grouping2_vue_vue_type_style_index_1_lang = "";
const _sfc_main$4 = defineComponent({
  name: "App",
  components: { TableLite },
  setup() {
    const data2 = reactive([]);
    for (let i = 1; i < 126; i++) {
      data2.push({
        id: i,
        name: "TEST" + i,
        email: "test" + i + "@example.com"
      });
    }
    data2.push({
      id: 126,
      name: "TEST1",
      email: "test111@example.com"
    });
    data2.push({
      id: 127,
      name: "TEST1",
      email: "test111111@example.com"
    });
    data2.push({
      id: 128,
      name: "TEST2",
      email: "test222@example.com"
    });
    const table = reactive({
      groupingKey: "name",
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
      rows: data2,
      totalRecordCount: computed(() => {
        return table.rows.length;
      }),
      sortable: {
        order: "id",
        sort: "asc"
      }
    });
    return {
      table
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_table_lite = resolveComponent("table-lite");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_table_lite, {
    "is-static-mode": true,
    "grouping-key": _ctx.table.groupingKey,
    columns: _ctx.table.columns,
    rows: _ctx.table.rows,
    total: _ctx.table.totalRecordCount,
    sortable: _ctx.table.sortable
  }, null, _parent));
  _push(`<div class="mt-5" data-v-2c40de20><button data-v-2c40de20><a target="_blank" class="bg-secondary px-4 py-2 flex items-center" href="https://github.com/linmasahiro/vue3-table-lite/blob/master/src/examples/Grouping2.vue" data-v-2c40de20><p class="text-base font-semibold pr-1" data-v-2c40de20>View Source</p></a></button></div><!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("code/advance-examples/grouping2.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const grouping = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2c40de20"]]);
const customStyle_vue_vue_type_style_index_0_scoped_63d8c1b8_lang = "";
const _sfc_main$3 = {
  __name: "custom-style",
  __ssrInlineRender: true,
  setup(__props) {
    const sampleData12 = (offst, limit) => {
      offst = offst + 1;
      let data2 = [];
      for (let i = offst; i <= limit; i++) {
        data2.push({
          id: i,
          name: "TEST" + i,
          email: "test" + i + "@example.com"
        });
      }
      return data2;
    };
    const sampleData22 = (offst, limit) => {
      let data2 = [];
      for (let i = limit; i > offst; i--) {
        data2.push({
          id: i,
          name: "TEST" + i,
          email: "test" + i + "@example.com"
        });
      }
      return data2;
    };
    const table = reactive({
      isLoading: false,
      isReSearch: false,
      columns: [
        {
          label: "ID",
          headerClasses: ["bg-gold", "color-red"],
          columnClasses: ["bg-gray"],
          field: "id",
          width: "3%",
          sortable: true,
          isKey: true
        },
        {
          label: "Name",
          columnStyles: { background: "gold" },
          field: "name",
          width: "10%",
          sortable: true,
          display: function(row) {
            return '<a href="javascript:void(0)" data-id="' + row.id + '" class="is-rows-el name-btn">' + row.name + "</a>";
          }
        },
        {
          label: "Email",
          headerStyles: { background: "gray" },
          columnStyles: { background: "gold" },
          field: "email",
          width: "15%",
          sortable: true
        },
        {
          label: "",
          headerClasses: ["bg-gold"],
          columnClasses: ["bg-gray"],
          columnStyles: { background: "gray" },
          field: "quick",
          width: "10%",
          display: function(row) {
            return '<button type="button" data-id="' + row.id + '" class="is-rows-el quick-btn bg-secondary px-4 py-2 text-white">Button</button>';
          }
        }
      ],
      rows: [],
      totalRecordCount: 0,
      sortable: {
        order: "id",
        sort: "asc"
      },
      messages: {
        pagingInfo: "Showing {0}-{1} of {2}",
        pageSizeChangeLabel: "Row count:",
        gotoPageLabel: "Go to page:",
        noDataAvailable: "No data"
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
    const tableLoadingFinish = (elements) => {
      table.isLoading = false;
      Array.prototype.forEach.call(elements, function(element) {
        if (element.classList.contains("name-btn")) {
          element.addEventListener("click", function() {
            console.log(this.dataset.id + " name-btn click!!");
          });
        }
        if (element.classList.contains("quick-btn")) {
          element.addEventListener("click", function() {
            console.log(this.dataset.id + " quick-btn click!!");
          });
        }
      });
    };
    const updateCheckedRows = (rowsKey) => {
      console.log(rowsKey);
    };
    doSearch(0, 10, "id", "asc");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "z-10" }, _attrs))} data-v-63d8c1b8>`);
      _push(ssrRenderComponent(unref(TableLite), {
        "has-checkbox": true,
        "is-loading": table.isLoading,
        "is-re-search": table.isReSearch,
        columns: table.columns,
        rows: table.rows,
        total: table.totalRecordCount,
        sortable: table.sortable,
        messages: table.messages,
        onDoSearch: doSearch,
        onIsFinished: tableLoadingFinish,
        onReturnCheckedRows: updateCheckedRows
      }, null, _parent));
      _push(`<div class="mt-5" data-v-63d8c1b8><button data-v-63d8c1b8><a target="_blank" class="bg-secondary px-4 py-2 flex items-center" href="https://github.com/linmasahiro/vue3-table-lite/blob/master/src/examples/CustomizeStyle.vue" data-v-63d8c1b8><p class="text-base font-semibold pr-1" data-v-63d8c1b8>View Source</p></a></button></div></main>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("code/advance-examples/custom-style.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const customizeStyle = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-63d8c1b8"]]);
const customStyle2_vue_vue_type_style_index_0_scoped_b7d4df2c_lang = "";
const _sfc_main$2 = {
  __name: "custom-style-2",
  __ssrInlineRender: true,
  setup(__props) {
    const sampleData12 = (offst, limit) => {
      offst = offst + 1;
      let data2 = [];
      for (let i = offst; i <= limit; i++) {
        data2.push({
          id: i,
          name: "TEST" + i,
          email: "test" + i + "@example.com"
        });
      }
      return data2;
    };
    const sampleData22 = (offst, limit) => {
      let data2 = [];
      for (let i = limit; i > offst; i--) {
        data2.push({
          id: i,
          name: "TEST" + i,
          email: "test" + i + "@example.com"
        });
      }
      return data2;
    };
    const table = reactive({
      isLoading: false,
      isReSearch: false,
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
          sortable: true,
          display: function(row) {
            return '<a href="javascript:void(0)" data-id="' + row.id + '" class="is-rows-el name-btn">' + row.name + "</a>";
          }
        },
        {
          label: "Email",
          field: "email",
          width: "15%",
          sortable: true
        },
        {
          label: "",
          field: "quick",
          width: "10%",
          display: function(row) {
            return '<button type="button" data-id="' + row.id + '" class="is-rows-el quick-btn ">Button</button>';
          }
        }
      ],
      rows: [],
      totalRecordCount: 0,
      sortable: {
        order: "id",
        sort: "asc"
      },
      messages: {
        pagingInfo: "Showing {0}-{1} of {2}",
        pageSizeChangeLabel: "Row count:",
        gotoPageLabel: "Go to page:",
        noDataAvailable: "No data"
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
    const tableLoadingFinish = (elements) => {
      table.isLoading = false;
      Array.prototype.forEach.call(elements, function(element) {
        if (element.classList.contains("name-btn")) {
          element.addEventListener("click", function() {
            console.log(this.dataset.id + " name-btn click!!");
          });
        }
        if (element.classList.contains("quick-btn")) {
          element.addEventListener("click", function() {
            console.log(this.dataset.id + " quick-btn click!!");
          });
        }
      });
    };
    const updateCheckedRows = (rowsKey) => {
      console.log(rowsKey);
    };
    doSearch(0, 10, "id", "asc");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "z-10" }, _attrs))} data-v-b7d4df2c>`);
      _push(ssrRenderComponent(unref(TableLite), {
        "has-checkbox": true,
        "is-loading": table.isLoading,
        "is-re-search": table.isReSearch,
        columns: table.columns,
        rows: table.rows,
        total: table.totalRecordCount,
        sortable: table.sortable,
        messages: table.messages,
        onDoSearch: doSearch,
        onIsFinished: tableLoadingFinish,
        onReturnCheckedRows: updateCheckedRows
      }, null, _parent));
      _push(`<div class="mt-5" data-v-b7d4df2c><button data-v-b7d4df2c><a target="_blank" class="bg-secondary px-4 py-2 flex items-center" href="https://github.com/linmasahiro/vue3-table-lite/blob/master/src/examples/CustomizeStyle2.vue" data-v-b7d4df2c><p class="text-base font-semibold pr-1" data-v-b7d4df2c>View Source</p></a></button></div></main>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("code/advance-examples/custom-style-2.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const customizeStyle2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b7d4df2c"]]);
const cusMessage_vue_vue_type_style_index_0_scoped_78837006_lang = "";
const _sfc_main$1 = {
  __name: "cus-message",
  __ssrInlineRender: true,
  setup(__props) {
    const sampleData12 = (offst, limit) => {
      offst = offst + 1;
      let data2 = [];
      for (let i = offst; i <= limit; i++) {
        data2.push({
          id: i,
          name: "TEST" + i,
          email: "test" + i + "@example.com"
        });
      }
      return data2;
    };
    const sampleData22 = (offst, limit) => {
      let data2 = [];
      for (let i = limit; i > offst; i--) {
        data2.push({
          id: i,
          name: "TEST" + i,
          email: "test" + i + "@example.com"
        });
      }
      return data2;
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
          label: "使用者名稱",
          field: "name",
          width: "10%",
          sortable: true
        },
        {
          label: "電子信箱",
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
      },
      messages: {
        pagingInfo: "現在顯示 {0} 到 {1}筆 共{2}筆",
        pageSizeChangeLabel: "每頁筆數:",
        gotoPageLabel: "現在頁數:",
        noDataAvailable: "沒有資料"
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
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "z-10" }, _attrs))} data-v-78837006>`);
      _push(ssrRenderComponent(unref(TableLite), {
        "is-loading": table.isLoading,
        columns: table.columns,
        rows: table.rows,
        total: table.totalRecordCount,
        sortable: table.sortable,
        messages: table.messages,
        onDoSearch: doSearch,
        onIsFinished: ($event) => table.isLoading = false
      }, null, _parent));
      _push(`<div class="mt-5" data-v-78837006><button data-v-78837006><a target="_blank" class="bg-secondary px-4 py-2 flex items-center" href="https://github.com/linmasahiro/vue3-table-lite/blob/master/src/examples/CustomizeMessage.vue" data-v-78837006><p class="text-base font-semibold pr-1" data-v-78837006>View Source</p></a></button></div></main>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("code/advance-examples/cus-message.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const customizeMessages = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-78837006"]]);
const cusPageDrop_vue_vue_type_style_index_0_scoped_16bab4af_lang = "";
const _sfc_main = {
  __name: "cus-page-drop",
  __ssrInlineRender: true,
  setup(__props) {
    const sampleData12 = (offst, limit) => {
      offst = offst + 1;
      let data2 = [];
      for (let i = offst; i <= limit; i++) {
        data2.push({
          id: i,
          name: "TEST" + i,
          email: "test" + i + "@example.com"
        });
      }
      return data2;
    };
    const sampleData22 = (offst, limit) => {
      let data2 = [];
      for (let i = limit; i > offst; i--) {
        data2.push({
          id: i,
          name: "TEST" + i,
          email: "test" + i + "@example.com"
        });
      }
      return data2;
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
      },
      pageOptions: [
        {
          value: 15,
          text: 15
        },
        {
          value: 30,
          text: 30
        }
      ]
    });
    const doSearch = (offset, limit, order, sort) => {
      table.isLoading = true;
      setTimeout(() => {
        table.isReSearch = offset == void 0 ? true : false;
        if (offset >= 15 || limit >= 30) {
          limit = 30;
        }
        if (sort == "asc") {
          table.rows = sampleData12(offset, limit);
        } else {
          table.rows = sampleData22(offset, limit);
        }
        table.totalRecordCount = 30;
        table.sortable.order = order;
        table.sortable.sort = sort;
      }, 600);
    };
    doSearch(0, table.pageOptions[0].value, "id", "asc");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "z-10" }, _attrs))} data-v-16bab4af>`);
      _push(ssrRenderComponent(unref(TableLite), {
        "is-loading": table.isLoading,
        columns: table.columns,
        rows: table.rows,
        total: table.totalRecordCount,
        sortable: table.sortable,
        messages: table.messages,
        "page-options": table.pageOptions,
        onDoSearch: doSearch,
        onIsFinished: ($event) => table.isLoading = false
      }, null, _parent));
      _push(`<div class="mt-5" data-v-16bab4af><button data-v-16bab4af><a target="_blank" class="bg-secondary px-4 py-2 flex items-center" href="https://github.com/linmasahiro/vue3-table-lite/blob/master/src/examples/CustomizePageDropdown.vue" data-v-16bab4af><p class="text-base font-semibold pr-1" data-v-16bab4af>View Source</p></a></button></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("code/advance-examples/cus-page-drop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customizePageDropdown = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-16bab4af"]]);
export {
  Filter as F,
  groupingWithToggle as a,
  asyncFilter as b,
  cusDisplayData as c,
  customizeStyle as d,
  customizeStyle2 as e,
  filterInTable as f,
  grouping as g,
  customizeMessages as h,
  customizePageDropdown as i,
  catchRow as j,
  fixedFirstColumn as k,
  fixedHeaderAndFirstColumn as l
};
