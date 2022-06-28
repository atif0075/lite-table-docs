<template>
  <section>
    <Header :title="i18n.$t('advance_examples')" />
    <section class="pt-20 px-3 pb-10">
      <div id="customize-display-data">
        <h1 class="head">{{ i18n.$t("customize_display_data") }}</h1>
        <CusDisplayData class="pt-3" />
      </div>
      <div id="filter">
        <h1 class="head">{{ i18n.$t("filter") }}</h1>
        <Filter class="pt-3" />
      </div>
      <div id="asynchronous-filter">
        <h1 class="head">{{ i18n.$t("asynchronous_filter") }}</h1>
        <AsyncFilter class="pt-3" />
      </div>
      <div id="customize-style">
        <h1 class="head">{{ i18n.$t("customize_style") }}</h1>
        <CustomStyle class="pt-3" />
      </div>
      <div id="customize-style-2">
        <h1 class="head">{{ i18n.$t("customize_style_2") }}</h1>
        <CustomStyle2 class="pt-3" />
      </div>
      <div id="customize-message">
        <h1 class="head">{{ i18n.$t("customize_message") }}</h1>
        <CusMessage class="pt-3" />
      </div>
      <div id="customize-page-dropdown">
        <h1 class="head">{{ i18n.$t("customize_page_dropdown") }}</h1>
        <CusPageDrop class="pt-3" />
      </div>
      <div id="catch-row-clicked">
        <h1 class="head">{{ i18n.$t("catch_row_clicked") }}</h1>
        <CatchRow class="pt-3" />
      </div>
      <div id="fixed-first-column">
        <h1 class="head">{{ i18n.$t("fixed_first_column") }}</h1>
        <FixedFirstColumn class="pt-3" />
      </div>
      <div id="show-controls">
        <h1 class="head">Show Controlls</h1>
        <ShowControls class="pt-3" />
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
import { useI18n } from "../../plugins/i18n";
import ShowControls from "../../components/advance-examples/show-controls.vue";
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
