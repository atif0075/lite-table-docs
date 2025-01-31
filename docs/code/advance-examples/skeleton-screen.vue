<template>
  <section class="py-2 flex-end"></section>
  <section class="shadow-lg rounded-lg overflow-hidden">
    <table-lite
      :is-slot-mode="true"
      :is-loading="table.isLoading"
      :skeleton-screen="true"
      :skeleton-rows="10"
      :columns="table.columns"
      :rows="table.rows"
      :total="table.totalRecordCount"
      :sortable="table.sortable"
      @do-search="doSearch"
      @is-finished="table.isLoading = false"
    >
      <template v-slot:name="data">
        <Test class="!text-green-500">
          {{ data.value.name }}
        </Test>
      </template>
    </table-lite>
  </section>
  <section
    v-if="openModel"
    class="fixed top-0 left-0 px-2 md:px-24 py-10 pt-15 w-full min-h-screen bg-black bg-opacity-90 z-100"
  >
    <div v-click-away="onClickAway">
      <Model :App="App" :allSubs="allSubs" :marks="marks" />
    </div>
  </section>
  <div class="mt-5">
    <button>
      <a
        target="_blank"
        class="bg-secondary px-4 py-2 flex items-center"
        href="https://github.com/linmasahiro/vue3-table-lite/blob/master/src/examples/VSlotMode.vue"
      >
        <p class="text-base font-semibold pr-1">View Source</p>
         
      </a>
    </button>
  </div>
</template>

<script setup>
import { defineComponent, reactive } from "vue";
import TableLite from "../TableLite.vue";
import Test from "../simple-examples/Test.vue";
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
});
/**
 * Search Event
 */
const doSearch = (offset, limit, order, sort) => {
  table.isLoading = true;
  setTimeout(() => {
    table.isReSearch = offset == undefined ? true : false;
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
// First get data
doSearch(0, 10, "id", "asc");
</script>
<style scoped>
::v-deep(.vtl-paging-info) {
  @apply text-black;
}
::v-deep(.vtl-paging) {
  @apply text-black;
}
</style>
