<template>
  <table-lite
    :is-static-mode="true"
    :grouping-key="table.groupingKey"
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
        href="https://github.com/linmasahiro/vue3-table-lite/blob/master/src/examples/Grouping2.vue"
      >
        <p class="text-base font-semibold pr-1">View Source</p>
         
      </a>
    </button>
  </div>
</template>

<script>
import { defineComponent, reactive, computed } from "vue";
import TableLite from "../TableLite.vue";

export default defineComponent({
  name: "App",
  components: { TableLite },
  setup() {
    // Fake data
    const data = reactive([]);
    for (let i = 1; i < 126; i++) {
      data.push({
        id: i,
        name: "TEST" + i,
        email: "test" + i + "@example.com",
      });
    }
    data.push({
      id: 126,
      name: "TEST1",
      email: "test111@example.com",
    });
    data.push({
      id: 127,
      name: "TEST1",
      email: "test111111@example.com",
    });
    data.push({
      id: 128,
      name: "TEST2",
      email: "test222@example.com",
    });

    // Table config
    const table = reactive({
      groupingKey: "name",
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

    return {
      table,
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

<!-- override default.vue stylesheet -->
<style lang="postcss">
::-webkit-scrollbar {
  height: 0px;
}
</style>
