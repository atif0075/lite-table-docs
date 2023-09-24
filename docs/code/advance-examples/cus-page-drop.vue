<template>
  <main class="z-10">
    <table-lite
      :is-loading="table.isLoading"
      :columns="table.columns"
      :rows="table.rows"
      :total="table.totalRecordCount"
      :sortable="table.sortable"
      :messages="table.messages"
      :page-options="table.pageOptions"
      @do-search="doSearch"
      @is-finished="table.isLoading = false"
    ></table-lite>
    <div class="mt-5">
      <button>
        <a
          target="_blank"
          class="bg-secondary px-4 py-2 flex items-center"
          href="https://github.com/linmasahiro/vue3-table-lite/blob/master/src/examples/CustomizePageDropdown.vue"
        >
          <p class="text-base font-semibold pr-1">View Source</p>
          
        </a>
      </button>
    </div>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import TableLite from "../TableLite.vue";

// Fake Data for 'asc' sortable
const sampleData1 = (offst, limit) => {
  offst = offst + 1;
  let data = [];
  for (let i = offst; i <= limit; i++) {
    data.push({
      id: i,
      name: "TEST" + i,
      email: "test" + i + "@example.com",
    });
  }
  return data;
};

// Fake Data for 'desc' sortable
const sampleData2 = (offst, limit) => {
  let data = [];
  for (let i = limit; i > offst; i--) {
    data.push({
      id: i,
      name: "TEST" + i,
      email: "test" + i + "@example.com",
    });
  }
  return data;
};

// Table config
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
  pageOptions: [
    {
      value: 15,
      text: 15,
    },
    {
      value: 30,
      text: 30,
    },
  ],
});
/**
 * Search Event
 */
const doSearch = (offset, limit, order, sort) => {
  table.isLoading = true;
  setTimeout(() => {
    table.isReSearch = offset == undefined ? true : false;
    if (offset >= 15 || limit >= 30) {
      limit = 30;
    }
    if (sort == "asc") {
      table.rows = sampleData1(offset, limit);
    } else {
      table.rows = sampleData2(offset, limit);
    }
    table.totalRecordCount = 30;
    table.sortable.order = order;
    table.sortable.sort = sort;
  }, 600);
};
// First get data
doSearch(0, table.pageOptions[0].value, "id", "asc");
</script>

<style scoped>
::v-deep(.vtl-paging-info) {
  @apply text-black;
}
::v-deep(.vtl-paging) {
  @apply text-black;
}
</style>
