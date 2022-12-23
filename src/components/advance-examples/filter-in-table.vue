<template>
  <main class="z-10">
    <table-lite
      :is-static-mode="true"
      :columns="table.columns"
      :rows="table.rows"
      :total="table.totalRecordCount"
      :sortable="table.sortable"
      @VnodeMounted="initTable"
    ></table-lite>
    <div class="mt-5">
      <button>
        <a
          target="_blank"
          class="bg-secondary px-4 py-2 flex items-center"
          href="https://github.com/linmasahiro/vue3-table-lite/blob/master/src/examples/Filter3.vue"
        >
          <p class="text-base font-semibold pr-1">View Source</p>
          <svg
            class="h-5 w-5"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="32"
            data-view-component="true"
          >
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              fill="#F0F6FC"
            ></path>
          </svg>
        </a>
      </button>
    </div>
  </main>
</template>

<script>
import { defineComponent, reactive, ref, computed, createApp, h } from "vue";
import TableLite from "vue3-table-lite";

const searchTerm = ref(""); // Search text
const searchTerm2 = ref(""); // Search text

// Fake data
const data = reactive([]);

for (let i = 1; i < 126; i++) {
  data.push({
    id: i,
    name: "TEST" + i,
    email: "test" + i + "@example.com",
  });
}

export default defineComponent({
  name: "App",
  components: { TableLite },
  setup() {
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
        return data.filter(
          (x) =>
            x.email.toLowerCase().includes(searchTerm2.value.toLowerCase()) &&
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

    /**
     * Trigger after initail component
     */
    const initTable = ({ el: tableComponent }) => {
      let headerTr = tableComponent.getElementsByClassName("vtl-thead-tr");
      if (!headerTr[0]) {
        return;
      }
      let cloneTr = headerTr[0].cloneNode(true); // Clone first <tr>
      let childTh = cloneTr.getElementsByClassName("vtl-thead-th");
      for (let i = 0; i < childTh.length; i++) {
        // Clear <th>'s HTML
        childTh[i].innerHTML = "";
      }

      // Create a input element and append to first <th>
      createApp(
        defineComponent({
          setup() {
            return () =>
              h("input", {
                style: "color: black;",
                value: searchTerm.value,
                onInput: (e) => {
                  searchTerm.value = e.target.value;
                },
              });
          },
        })
      ).mount(childTh[1]);
      createApp(
        defineComponent({
          setup() {
            return () =>
              h("input", {
                style: "color: black;",
                value: searchTerm2.value,
                onInput: (e) => {
                  searchTerm2.value = e.target.value;
                },
              });
          },
        })
      ).mount(childTh[2]);

      // append cloned element to the header after first <tr>
      headerTr[0].after(cloneTr);
    };

    return {
      searchTerm,
      searchTerm2,
      table,
      initTable,
    };
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
