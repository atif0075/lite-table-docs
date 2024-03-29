<template>
  <section class="py-2 flex-end"></section>
  <section class="shadow-lg rounded-lg overflow-hidden">
    <table-lite
      :is-static-mode="true"
      :is-slot-mode="true"
      :is-loading="table.isLoading"
      :columns="table.columns"
      :rows="table.rows"
      :total="table.totalRecordCount"
      :sortable="table.sortable"
      @rowClicked="rowClicked"
    >
      <template v-slot:icon="data">
        <div>
          <div class="flex-cen right-0 w-3 relative">
            <div
              @click="data.value.showEdit = !data.value.showEdit"
              :class="[data.value.showEdit ? 'hidden' : 'block right-0']"
            >
              <i class="fa-solid fa-ellipsis-vertical text-green"></i>
            </div>
            <div
              @click="data.value.showEdit = !data.value.showEdit"
              :class="[data.value.showEdit ? 'block' : 'hidden']"
            >
              <i class="fa-solid fa-xmark text-green"></i>
            </div>
            <div
              :class="[data.value.showEdit ? 'block' : 'hidden']"
              class="bg-white py-5 px-8 z-50 absolute md:-left-72 -left-64 -top-5 flex items-center uppercase font-semibold"
            >
              <i class="fa-solid fa-pen text-green"></i>
              <p @click="clickedRow = !clickedRow" class="ml-1 cursor-pointer">
                View Info
              </p>
              <i class="fa-solid fa-trash-can text-green ml-4"></i>

              <p
                @click="deleteCurrentRow(data.value)"
                class="ml-1 cursor-pointer"
              >
                Delete
              </p>
            </div>
          </div>
        </div>
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
        href="https://github.com/linmasahiro/vue3-table-lite/blob/master/src/examples/ShowControls.vue"
      >
        <p class="text-base font-semibold pr-1">View Source</p>
         
      </a>
    </button>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import TableLite from "vue3-table-lite";
import Model from "../Additional/Model.vue";

const data = ref([
  {
    name: "M Atif",
    showEdit: false,
    DOB: "12/12/2020",
    subs: "42",
    courseType: "Bs SE",
    allData: {
      App: "M Atif - Bs Software Engineering",
      allSubjects: [
        {
          name: "Ai Learning",
          percentage: "82%",
        },
        {
          name: "ML",
          percentage: "45%",
        },
        {
          name: "JavaScript",
          percentage: "99%",
        },
      ],

      marks: "500",
    },
  },
  {
    name: "John Doe",
    showEdit: false,
    DOB: "12/12/2022",
    subs: "36",
    courseType: "BS CS",
    allData: {
      App: "John Doe - Bs Computer Science",
      allSubjects: [
        {
          name: "Theory of Automata",
          percentage: "82%",
        },
        {
          name: "Software Construction",
          percentage: "45%",
        },
      ],

      marks: "900",
    },
  },
]);
const table = reactive({
  isLoading: false,
  columns: [
    {
      label: "Name",
      field: "name",
      width: "25%",
      sortable: true,
    },
    {
      label: "Study",
      field: "courseType",
      width: "25%",
      sortable: true,
    },
    {
      label: "DOB",
      field: "DOB",
      width: "25%",
      sortable: true,
    },
    {
      label: "Subjects",
      field: "subs",
      width: "25%",
      sortable: false,
    },
    {
      label: " ",
      field: "icon",
      sortable: false,
    },
  ],
  rows: data.value,
  totalRecordCount: computed(() => {
    return table.rows.length;
  }),
  sortable: {
    order: "name",
    sort: "asc",
  },
});

const onClickAway = () => {
  openModel.value = !openModel.value;
  clickedRow.value = !clickedRow.value;
};
let openModel = ref(false);
let App = ref("");
let allSubs = ref("");
let extSubs = ref("");
let marks = ref("");
let clickedRow = ref("");
const rowClicked = (row) => {
  if (clickedRow.value) {
    row.showEdit = !row.showEdit;
    openModel.value = !openModel.value;
    App.value = row.name;
    allSubs.value = row.allData.allSubjects;
    extSubs.value = row.allData.extSubs;
    marks.value = row.allData.marks;
  }
};
let deleteCurrentRow = (row) => {
  data.value.splice(data.value.indexOf(row), 1);
};
</script>
<style scoped>
::v-deep(.vtl-table .vtl-thead .vtl-thead-th) {
  @apply border-0 border-b border-[#e6e6e6] font-semibold text-sm  text-white bg-secondary py-5 px-5;
}
::v-deep(.vtl-table td) {
  @apply border-0;
}

::v-deep(.vtl-table tr) {
  @apply border-0 border-b border-[#e6e6e6] py-3;
}

::v-deep(.vtl-tbody-td) {
  @apply px-5 py-6  border-0 border-b text-left text-[10px] sm:text-xs font-semibold text-black uppercase tracking-wider !important;
}
::v-deep(.vtl-paging-info) {
  display: none;
}
::v-deep(.vtl-tbody-tr) {
  @apply hover:bg-transparent !important;
}

::v-deep(.vtl-paging) {
  color: black;
}

::v-deep(.vtl-both) {
  @apply text-[10px] sm:text-xs !important;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAA6UlEQVQ4jc2SvWoCQRSFv3tjaWMRUmQ7f0gCFik0kC6g5jl8D5Vh43vkPcTGJhiwCyi4MTZ2giHB1hkrYbPZEa30K8+cuXPOZeC8iUxAZIJ9FvWeTF9uER0iOmIWlo8bEIX3qBsA18AVjgFf3ephA2ZhBegDlzE1h7U9PruPSbv8fdncIfoOZD2J1zj7QNGMd0ImYVjgpAlWSEUdsNhf4UiSCQLEvYJ4Krg19qIK/KYnKJoxok84Vim3f0CfKbUncfF/hXxrBNSAZUz9RrVBofWWtHuWBczNDRvtAxmEOvnOh9fr5YCvfHq2lRE65U8seIkAAAAASUVORK5CYII=);
}
</style>
