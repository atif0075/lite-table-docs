<template>
    <section>
        <Header title="Usage" />
    </section>
    <section class="pt-20 px-3 pb-10">
        <div>Vue 3 Table Lite is supported 3 rendering mode</div>
        <div v-for="(items, index) in usageList" :key="index">
            <h1 :id="items.id" class="head">{{ items.title }}</h1>
            <div class="pt-2">
                {{ items.desc }}
            </div>
            <h1 class="text-sm font-semibold py-2">Template:</h1>
            <p class="bg-light-gray bg-opacity-5 py-3 px-4 mt-1 rounded">
            <div v-highlight>
                <pre class="language-vue">
                 <code >
                 {{ items.tempCode }}
                 </code>
             </pre>
            </div>
            </p>
            <h1 class="text-sm font-semibold py-2">Script(Composition API):</h1>
            <p class="bg-light-gray bg-opacity-5 py-3 px-4 mt-1 rounded overflow-auto">
            <div v-highlight>
                <pre class="language-vue">
                 <code >
                 {{ items.scriptCode }}
                 </code>
             </pre>
            </div>
            </p>
        </div>


    </section>
</template>
<script  setup>
import { ref } from "vue";
import Header from "../../components/Header.vue";
let scrollBehavior = () => {
  document.getElementById("app")?.scrollIntoView({ behavior: "smooth" });
};
scrollBehavior();
let usageList = ref([
    {
        title: "Default Mode",
        id:"defMode",
        desc: "If you are always use API to get rows data. choose this mode.",
        tempCode: `
<table-lite
  :is-loading="table.isLoading"
  :columns="table.columns"
  :rows="table.rows"
  :total="table.totalRecordCount"
  :sortable="table.sortable"
  @do-search="doSearch"
  @is-finished="tableLoadingFinish"
/></table-lite>`,
        scriptCode: `
    export default defineComponent({
    name: "App",
    components: { TableLite },
    setup() {
      // Init Your table settings
      const table = reactive({
        isLoading: false,
        columns: [
          {
            label: "ID",
            field: "id",
            width: "3%",
            sortable: true,
            isKey: true,
          },
          {
            label: "Name",
            field: "name",
            width: "10%",
            sortable: true,
          },
          {
            label: "Email",
            field: "email",
            width: "15%",
            sortable: true,
          },
        ],
        rows: [],
        totalRecordCount: 0,
        sortable: {
          order: "id",
          sort: "asc",
        },
      });
  
      /**
       * Table search event
       */
       const doSearch = (offset, limit, order, sort) => {
        table.isLoading = true;
  
        // Start use axios to get data from Server
        let url = 'https://www.example.com/api/some_endpoint?offset=' + offset + '&limit=' + limit + '&order=' + order + '&sort=' + sort;
        axios.get(url)
        .then((response) => {
          // Point: your response is like it on this example.
          //   {
          //   rows: [{
          //     id: 1,
          //     name: 'jack',
          //     email: 'example@example.com'
          //   },{
          //     id: 2,
          //     name: 'rose',
          //     email: 'example@example.com'
          //   }],
          //   count: 2,
          //   ...something
          // }
          
          // refresh table rows
          table.rows = response.rows;
          table.totalRecordCount = response.count;
          table.sortable.order = order;
          table.sortable.sort = sort;
        });
        // End use axios to get data from Server
      };
  
      /**
       * Table search finished event
       */
      const tableLoadingFinish = (elements) => {
        table.isLoading = false;
      };

      // Get data first
      doSearch(0, 10, 'id', 'asc');
  
      return {
        table,
        doSearch,
        tableLoadingFinish,
      };
  },`,
    },
    {
        title: "V-slot Mode",
         id:"slotMode",
        desc: "If you are use API to get rows data and need use vue components on rendering. choose this mode.",
        tempCode: `
    <table-lite
      :is-slot-mode="true"
      :is-loading="table.isLoading"
      :columns="table.columns"
      :rows="table.rows"
      :total="table.totalRecordCount"
      :sortable="table.sortable"
      @do-search="doSearch"
      @is-finished="table.isLoading = false"
    >
      <template v-slot:name="data">
        {{ data.value.name }}
      </template>
    </table-lite>`, 
        scriptCode: `
    export default defineComponent({
    name: "App",
    components: { TableLite },
    setup() {
      // Init Your table settings
      const table = reactive({
        isLoading: false,
        columns: [
          {
            label: "ID",
            field: "id",
            width: "3%",
            sortable: true,
            isKey: true,
          },
          {
            label: "Name",
            field: "name",
            width: "10%",
            sortable: true,
          },
          {
            label: "Email",
            field: "email",
            width: "15%",
            sortable: true,
          },
        ],
        rows: [],
        totalRecordCount: 0,
        sortable: {
          order: "id",
          sort: "asc",
        },
      });
  
      /**
       * Table search event
       */
       const doSearch = (offset, limit, order, sort) => {
        table.isLoading = true;
  
        // Start use axios to get data from Server
        let url = 'https://www.example.com/api/some_endpoint?offset=' + offset + '&limit=' + limit + '&order=' + order + '&sort=' + sort;
        axios.get(url)
        .then((response) => {
          // Point: your response is like it on this example.
          //   {
          //   rows: [{
          //     id: 1,
          //     name: 'jack',
          //     email: 'example@example.com'
          //   },{
          //     id: 2,
          //     name: 'rose',
          //     email: 'example@example.com'
          //   }],
          //   count: 2,
          //   ...something
          // }
          
          // refresh table rows
          table.rows = response.rows;
          table.totalRecordCount = response.count;
          table.sortable.order = order;
          table.sortable.sort = sort;
        });
        // End use axios to get data from Server
      };
  
      /**
       * Table search finished event
       */
      const tableLoadingFinish = (elements) => {
        table.isLoading = false;
      };

      // Get data first
      doSearch(0, 10, 'id', 'asc');
  
      return {
        table,
        doSearch,
        tableLoadingFinish,
      };
  },`,
    },
    {
        title: "Static Mode",
         id:"staticMode",
        desc: "If you are not use API to get rows data. choose this mode.",
        tempCode: ` 
    <table-lite
      :is-static-mode="true"
      :is-loading="table.isLoading"
      :columns="table.columns"
      :rows="table.rows"
      :total="table.totalRecordCount"
      :sortable="table.sortable"
      @is-finished="table.isLoading = false"
    ></table-lite>`, 
        scriptCode: `
    export default defineComponent({
    name: "App",
    components: { TableLite },
    setup() {
      // Init Your table settings
      const table = reactive({
        isLoading: false,
        columns: [
          {
            label: "ID",
            field: "id",
            width: "3%",
            sortable: true,
            isKey: true,
          },
          {
            label: "Name",
            field: "name",
            width: "10%",
            sortable: true,
          },
          {
            label: "Email",
            field: "email",
            width: "15%",
            sortable: true,
          },
        ],
        rows: [{
            id: 1,
            name: 'jack',
            email: 'example@example.com'
          },{
            id: 2,
            name: 'rose',
            email: 'example@example.com'
        }],
        totalRecordCount: 2,
        sortable: {
          order: "id",
          sort: "asc",
        },
      });
  
      return {
        table,
      };
  },`,
    },
])
</script>
<style >
.head {
    @apply border-b border-green border-opacity-25 mt-4 py-3 text-2xl font-semibold px-3;
}
</style>
