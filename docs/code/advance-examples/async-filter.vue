<template>
  <main class="z-10">
    <div>
      <label class="text-sm font-semibold">SearchBy:</label>
      <input
        class="outline-none border border-green border-dashed border-opacity-30 h-10 my-2 px-2 bg-secondary w-full"
        v-model="searchTerm"
      />
    </div>
    <table-lite
      :is-static-mode="true"
      :is-loading="table.isLoading"
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
          href="https://github.com/linmasahiro/vue3-table-lite/blob/master/src/examples/Filter2.vue"
        >
          <p class="text-base font-semibold pr-1">View Source</p>
          
        </a>
      </button>
    </div>
  </main>
</template>

<script setup>
import { defineComponent, reactive, ref, computed, watch } from "vue";
import TableLite from "vue3-table-lite";

const searchTerm = ref(""); // Search text

// Fake data
const data = reactive({
  rows: [],
});

/**
 * Get server data request
 */
const myRequest = async (keyword) => {
  const fakeData = [];
  for (let i = 0; i < 126; i++) {
    fakeData.push({
      id: i,
      name: "TEST" + i,
      email: "test" + i + "@example.com",
    });
  }
  return await new Promise((resolve, reject) => {
    try {
      table.isLoading = true;
      // Remove setTimeout() and change to your Axios request or AJAX request on here.
      setTimeout(() => {
        table.isLoading = false;
        let newData = fakeData.filter(
          (x) =>
            x.email.toLowerCase().includes(keyword.toLowerCase()) ||
            x.name.toLowerCase().includes(keyword.toLowerCase())
        );
        resolve(newData);
      }, 2000);
    } catch (error) {
      console.log("Fetch error", error);
      reject();
    }
  });
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
  rows: computed(() => {
    return data.rows;
  }),
  totalRecordCount: computed(() => {
    return table.rows.length;
  }),
  sortable: {
    order: "id",
    sort: "asc",
  },
});

/**
 * Use vue.js watch to watch your state's change
 */
watch(
  () => searchTerm.value,
  (val) => {
    myRequest(val).then((newData) => {
      data.rows = newData;
    });
  }
);

// Get data on first rendering
myRequest("").then((newData) => {
  data.rows = newData;
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
