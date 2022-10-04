<template>
  <section>
    <Header :title="i18n.$t('advance_examples')" />
    <section class="pt-20 px-3 pb-10">
      <div id="customize-display-data" class="min-h-230">
        <h1 class="head">{{ i18n.$t("customize_display_data") }}</h1>
        <CusDisplayData class="pt-3" />
      </div>
      <div id="filter" class="min-h-210">
        <h1 class="head">{{ i18n.$t("filter") }}</h1>
        <Filter class="pt-3" />
      </div>
      <div id="asynchronous-filter" class="min-h-210">
        <h1 class="head">{{ i18n.$t("asynchronous_filter") }}</h1>
        <AsyncFilter class="pt-3" />
      </div>
      <div id="filter-in-table" class="min-h-210">
        <h1 class="head">{{ i18n.$t("filter_in_table") }}</h1>
        <FilterInTable class="pt-3" />
      </div>
      <div id="customize-style" class="min-h-230">
        <h1 class="head">{{ i18n.$t("customize_style") }}</h1>
        <CustomStyle class="pt-3" />
      </div>
      <div id="customize-style-2" class="min-h-230">
        <h1 class="head">{{ i18n.$t("customize_style_2") }}</h1>
        <CustomStyle2 class="pt-3" />
      </div>
      <div id="customize-message" class="min-h-200">
        <h1 class="head">{{ i18n.$t("customize_message") }}</h1>
        <CusMessage class="pt-3" />
      </div>
      <div id="customize-page-dropdown" class="min-h-250">
        <h1 class="head">{{ i18n.$t("customize_page_dropdown") }}</h1>
        <CusPageDrop class="pt-3" />
      </div>
      <div id="catch-row-clicked" class="min-h-230">
        <h1 class="head">{{ i18n.$t("catch_row_clicked") }}</h1>
        <CatchRow class="pt-3" />
      </div>
      <div id="fixed-first-column" class="min-h-190">
        <h1 class="head">{{ i18n.$t("fixed_first_column") }}</h1>
        <FixedFirstColumn class="pt-3" />
      </div>
      <div id="fixed-header-and-first-column" class="min-h-100">
        <h1 class="head">{{ i18n.$t("fixed_header_and_first_column") }}</h1>
        <FixedHeaderAndFirstColumn class="pt-3" />
      </div>
      <div id="show-controls" class="min-h-100">
        <h1 class="head">{{ i18n.$t("show_controls") }}</h1>
        <ShowControls class="pt-3" />
      </div>
      <div id="grouping" class="min-h-250">
        <h1 class="head">{{ i18n.$t("grouping_with_toggle") }}</h1>
        <Grouping class="pt-3" />
      </div>
      <div id="grouping2" class="min-h-250">
        <h1 class="head">{{ i18n.$t("grouping") }}</h1>
        <Grouping2 class="pt-3" />
      </div>
    </section>
  </section>
</template>
<script setup>
import Header from "../../components/Header.vue";
import CusDisplayData from "../../components/advance-examples/cus-display-data.vue";
import Filter from "../../components/advance-examples/filter.vue";
import AsyncFilter from "../../components/advance-examples/async-filter.vue";
import CustomStyle from "../../components/advance-examples/custom-style.vue";
import CustomStyle2 from "../../components/advance-examples/custom-style-2.vue";
import CusMessage from "../../components/advance-examples/cus-message.vue";
import CusPageDrop from "../../components/advance-examples/cus-page-drop.vue";
import CatchRow from "../../components/advance-examples/catch-row.vue";
import FixedFirstColumn from "../../components/advance-examples/fixed-first-column.vue";
import FixedHeaderAndFirstColumn from "../../components/advance-examples/fixed-header-and-first-column.vue";
import { useI18n } from "../../plugins/i18n";
import ShowControls from "../../components/advance-examples/show-controls.vue";
import FilterInTable from "../../components/advance-examples/filter-in-table.vue";
import Grouping from "../../components/advance-examples/grouping.vue";
import Grouping2 from "../../components/advance-examples/grouping2.vue";
const i18n = useI18n();
let scrollBehavior = () => {
  document.getElementById("app")?.scrollIntoView({ behavior: "smooth" });
};
scrollBehavior();
</script>
<style>
.head {
  @apply border-b border-green border-opacity-25 py-3 text-2xl font-semibold px-3;
}
</style>
