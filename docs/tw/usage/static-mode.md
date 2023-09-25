# 靜態模式

如果你不需要每次操作都透过Api去取得数据（又或是只有在初始化时取得），那麽你可以选择该模式渲染。

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
