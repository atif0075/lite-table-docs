<template>
  <section>
    <Header title="Simple Examples" />
    <section class="pt-20 px-3 pb-10">
      <div id="customize-display-data">
        <h1 class="head">Customize display data</h1>
        <CusDisplayData class="pt-3" />
      </div>
      <div id="filter">
        <h1 class="head">Filter</h1>
        <Filter class="pt-3" />
      </div>
      <div id="asynchronous-filter">
        <h1 class="head">Asynchronous Filter</h1>
        <AsyncFilter class="pt-3" />
      </div>
      <div id="customize-style">
        <h1 class="head">Customize style</h1>
        <CustomStyle class="pt-3" />
      </div>
      <div id="customize-style-2">
        <h1 class="head">Customize style 2</h1>
        <CustomStyle2 class="pt-3" />
      </div>
      <div id="customize-message">
        <h1 class="head">Customize Message</h1>
        <CusMessage class="pt-3" />
      </div>
      <div id="customize-page-dropdown">
        <h1 class="head">Customize Page's dropdown</h1>
        <CusPageDrop class="pt-3" />
      </div>
      <div id="catch-row-clicked">
        <h1 class="head">Catch Row clicked</h1>
        <CatchRow class="pt-3" />
      </div>
    </section>
  </section>
</template>
<script  setup>
import Header from "../../components/Header.vue";
import CusDisplayData from "../../components/advance-examples/cus-display-data.vue";
import Filter from "../../components/advance-examples/filter.vue";
import AsyncFilter from "../../components/advance-examples/async-filter.vue";
import CustomStyle from "../../components/advance-examples/custom-style.vue";
import CustomStyle2 from "../../components/advance-examples/custom-style-2.vue";
import CusMessage from "../../components/advance-examples/cus-message.vue";
import CusPageDrop from "../../components/advance-examples/cus-page-drop.vue";
import CatchRow from "../../components/advance-examples/catch-row.vue";
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
