<template>
    <section>
        <Header :title="i18n.$t('usage')" />
    </section>
    <section class="pt-20 px-3 pb-10">
        <div>{{ i18n.$t('usage_description') }}</div>
        <div v-for="(items, index) in usageList" :key="index">
            <h1 :id="items.id" class="head">{{ items.title }}</h1>
            <div class="pt-2">
                {{ items.desc }}
            </div>
            <h1 class="text-sm font-semibold py-2">Template:</h1>
            <p class="bg-light-gray bg-opacity-5 py-3 px-4 mt-1 rounded overflow-x-auto relative">
            <div v-highlight>
                <pre class="language-vue">
                 <code >
                 {{ items.tempCode }}
                 </code>
             </pre>
                   <p @click="copy(items.tempCode)" class="absolute right-0 top-0 bg-gray/30 rounded p-1 text-xs cursor-pointer">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z">
        </path>
      </svg>
    </p>
            </div>
            </p>
            <h1 class="text-sm font-semibold py-2">Script(Composition API):</h1>
            <p class="bg-light-gray bg-opacity-5 py-3 px-4 mt-1 rounded overflow-auto relative" >
            <div v-highlight>
                <pre class="language-vue">
                 <code >
                 {{ items.scriptCode }}
                 </code>
             </pre>
               <p @click="copy(items.scriptCode)" class="absolute right-0 top-0 bg-gray/30 rounded p-1 text-xs cursor-pointer">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z">
        </path>
      </svg>
    </p>
            </div>
            </p>
        </div>


    </section>
</template>
<script  setup>
import { ref, watch } from "vue";
import Header from "../../components/Header.vue";
import { useI18n } from "../../plugins/i18n";
import useClipboard from "vue-clipboard3";
const i18n = useI18n();
let scrollBehavior = () => {
  document.getElementById("app")?.scrollIntoView({ behavior: "smooth" });
};
scrollBehavior();
let usageList = ref([]);
const initUsageList = () => {
  usageList.value = [
    {
        title: i18n.$t('default_mode'),
        id:"defMode",
        desc: i18n.$t('default_mode_description'),
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
        title: i18n.$t('slot_mode'),
         id:"slotMode",
        desc: i18n.$t('slot_mode_description'),
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
        title: i18n.$t('static_mode'),
         id:"staticMode",
        desc: i18n.$t('static_mode_description'),
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
  ];
}
watch(() => i18n.locale.value, () => {
  initUsageList();
});
initUsageList();



const { toClipboard } = useClipboard();
const copy = async (text) => {
  try {
    await toClipboard(text);
    console.log("Copied to clipboard");
  } catch (e) {
    console.error(e);
  }
};


</script>
<style >
.head {
    @apply border-b border-green border-opacity-25 mt-4 py-3 text-2xl font-semibold px-3;
}
</style>
