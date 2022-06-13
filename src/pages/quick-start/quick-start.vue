<template>
  <section>
    <Header :title="i18n.$t('quick_start')" />
  </section>
  <section class="pt-20 px-3 py-12">
    <div>{{ i18n.$t('component_description') }}</div>
    <h1 class="head">{{ i18n.$t('install') }}</h1>
    <p class="bg-light-gray bg-opacity-5 py-3 px-4 mt-4 rounded">
      <code>npm install vue3-table-lite --save</code>
    </p>
    <h1 class="head">{{ i18n.$t('include') }}</h1>
    <p class="bg-light-gray bg-opacity-5 py-3 px-4 mt-4 rounded">
      <code>import VueTableLite from 'vue3-table-lite'</code>
    </p>
    <h1 class="head">TypeScript {{ i18n.$t('include') }}</h1>
    <p class="bg-light-gray bg-opacity-5 py-3 px-4 mt-4 rounded">
      <code>import VueTableLite from 'vue3-table-lite/ts'</code>
    </p>
  </section>
</template>

<script setup>
import Header from "../../components/Header.vue";
import { useI18n } from "../../plugins/i18n";
const i18n = useI18n();
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
