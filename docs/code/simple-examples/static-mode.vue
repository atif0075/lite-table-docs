<template>
  <main class="z-10">
    <table-lite
      :is-static-mode="true"
      :columns="table.columns"
      :rows="table.rows"
      :total="table.totalRecordCount"
      :sortable="table.sortable"
    ></table-lite>
  </main>
</template>

<script setup>
import { defineComponent, reactive, computed } from "vue";
import TableLite from "../TableLite.vue";
// Fake data
const data = reactive([]);
for (let i = 0; i < 126; i++) {
  data.push({
    id: i,
    name: "TEST" + i,
    email: "test" + i + "@example.com",
  });
}
// Table config
const table = reactive({
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
  rows: data,
  totalRecordCount: computed(() => {
    return table.rows.length;
  }),
  sortable: {
    order: "id",
    sort: "asc",
  },
});
</script>
<style scoped>
::v-deep(.vtl-paging-info) {
  @apply text-black;
}
::v-deep(.vtl-paging) {
  @apply text-black;
}
</style>
