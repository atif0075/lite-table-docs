<template>
  <main class="z-10">
    <div>
      <label class="text-sm font-semibold">SearchBy:</label>
      <input
        class="outline-none border px-2 border-green border-dashed border-opacity-30 h-10 my-2 bg-secondary w-full"
        v-model="searchTerm"
      />
    </div>
    <table-lite
      :is-static-mode="true"
      :columns="table.columns"
      :rows="table.rows"
      :total="table.totalRecordCount"
      :sortable="table.sortable"
    ></table-lite>
    <div class="mt-5">
      <button>
        <a
          target="_blank"
          class="bg-secondary px-4 py-2 flex items-center"
          href="https://github.com/linmasahiro/vue3-table-lite/blob/master/src/examples/Filter.vue"
        >
          <p class="text-base font-semibold pr-1">View Source</p>
          
        </a>
      </button>
    </div>
  </main>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import TableLite from "vue3-table-lite";

const searchTerm = ref(""); // Search text

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
  rows: computed(() => {
    return data.filter(
      (x) =>
        x.email.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        x.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  }),
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
