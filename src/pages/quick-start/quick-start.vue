<template>
  <section>
    <Header title="QuickStart" />
  </section>
  <section class="pt-20 px-3 py-12">
    <div>
      A simple and lightweight data table component for Vue.js 3. Features
      sorting, paging, row check, dynamic data rendering, supported TypeScript,
      and more.
    </div>
    <h1 class="head">Install</h1>
    <p class="bg-light-gray bg-opacity-5 py-3 px-4 mt-4 rounded">
      <code>npm install vue3-table-lite --save</code>
    </p>
    <h1 class="head">Include</h1>
    <p class="bg-light-gray bg-opacity-5 py-3 px-4 mt-4 rounded">
      <code>import VueTableLite from 'vue3-table-lite'</code>
    </p>
    <h1 class="head">TypeScript Include</h1>
    <p class="bg-light-gray bg-opacity-5 py-3 px-4 mt-4 rounded">
      <code>import VueTableLite from 'vue3-table-lite/ts'</code>
    </p>
  </section>
</template>
<script  setup>
import { ref } from "vue";
import Header from "../../components/Header.vue";
let scrollBehavior = () => {
  document.getElementById("app")?.scrollIntoView({ behavior: "smooth" });
};
scrollBehavior();
</script>
<style scoped>
.head {
  @apply border-b border-green border-opacity-25 mt-4 py-3 text-2xl font-semibold px-3;
}
</style>
