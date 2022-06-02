<template>
  <main class="z-10">
    <table-lite
      :has-checkbox="true"
      :is-loading="table.isLoading"
      :is-re-search="table.isReSearch"
      :columns="table.columns"
      :rows="table.rows"
      :total="table.totalRecordCount"
      :sortable="table.sortable"
      :messages="table.messages"
      @do-search="doSearch"
      @is-finished="tableLoadingFinish"
      @return-checked-rows="updateCheckedRows"
    ></table-lite>
    <div class="mt-5">
      <button>
        <a
          target="_blank"
          class="bg-light-dark px-4 py-2 flex items-center"
          href="https://github.com/linmasahiro/vue3-table-lite/blob/master/src/examples/CustomizeStyle2.vue"
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

<script setup>
import { reactive } from "vue";
import TableLite from "vue3-table-lite";
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
  isReSearch: false,
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
      display: function (row) {
        return (
          '<a href="javascript:void(0)" data-id="' +
          row.id +
          '" class="is-rows-el name-btn">' +
          row.name +
          "</a>"
        );
      },
    },
    {
      label: "Email",
      field: "email",
      width: "15%",
      sortable: true,
    },
    {
      label: "",
      field: "quick",
      width: "10%",
      display: function (row) {
        return (
          '<button type="button" data-id="' +
          row.id +
          '" class="is-rows-el quick-btn ">Button</button>'
        );
      },
    },
  ],
  rows: [],
  totalRecordCount: 0,
  sortable: {
    order: "id",
    sort: "asc",
  },
  messages: {
    pagingInfo: "Showing {0}-{1} of {2}",
    pageSizeChangeLabel: "Row count:",
    gotoPageLabel: "Go to page:",
    noDataAvailable: "No data",
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
/**
 * Loading finish event
 */
const tableLoadingFinish = (elements) => {
  table.isLoading = false;
  Array.prototype.forEach.call(elements, function (element) {
    if (element.classList.contains("name-btn")) {
      element.addEventListener("click", function () {
        console.log(this.dataset.id + " name-btn click!!");
      });
    }
    if (element.classList.contains("quick-btn")) {
      element.addEventListener("click", function () {
        console.log(this.dataset.id + " quick-btn click!!");
      });
    }
  });
};
/**
 * Row checked event
 */
const updateCheckedRows = (rowsKey) => {
  console.log(rowsKey);
};
// First get data
doSearch(0, 10, "id", "asc");
</script>

<style scoped>
::v-deep(.vtl-table .vtl-thead .vtl-thead-th) {
  color: #fff;
  background-color: #42b983;
  border-color: #42b983;
}
::v-deep(.vtl-table td),
::v-deep(.vtl-table tr) {
  border: none;
}
::v-deep(.vtl-paging-info) {
  color: rgb(172, 0, 0);
}
::v-deep(.vtl-paging-count-label),
::v-deep(.vtl-paging-page-label) {
  color: rgb(172, 0, 0);
}
::v-deep(.vtl-paging-pagination-page-link) {
  border: none;
}
::v-deep(.vtl-paging-info) {
  @apply text-black;
}
::v-deep(.vtl-paging) {
  @apply text-black;
}
</style>
