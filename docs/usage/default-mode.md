<script setup>
import {en} from "/locales/en.js";
</script>

# {{en.default_mode}}

 {{en.default_mode_description}}

::: code-group

```vue [template]
<template>
<table-lite
  :is-loading="table.isLoading"
  :columns="table.columns"
  :rows="table.rows"
  :total="table.totalRecordCount"
  :sortable="table.sortable"
  @do-search="doSearch"
  @is-finished="tableLoadingFinish"
/></table-lite>
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
}
</script>
```

:::
