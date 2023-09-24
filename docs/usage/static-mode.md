# Static Mode

If you are not use API to get rows data. choose this mode.

::: code-group

```vue [template]
<template>
  <table-lite
    :is-static-mode="true"
    :is-loading="table.isLoading"
    :columns="table.columns"
    :rows="table.rows"
    :total="table.totalRecordCount"
    :sortable="table.sortable"
    @is-finished="table.isLoading = false"
  ></table-lite>
</template>
```

```vue [script]
<script>
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
},
</script>
```

:::
