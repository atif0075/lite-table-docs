<template>
  <section>
    <Header :title="i18n.$t('quick_start')" />
  </section>
  <section class="pt-20 px-3 py-12">
    <div>{{ i18n.$t("component_description") }}</div>
    <h1 class="head">{{ i18n.$t("install") }}</h1>
    <p class="bg-light-gray bg-opacity-5 py-3 px-4 mt-4 rounded relative overflow-hidden">
      <code class="font-code">{{ codeText[0] }}</code>
    <p @click="copy(codeText[0])" class="absolute right-0 top-0 bg-gray/30 rounded p-1 text-xs cursor-pointer">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z">
        </path>
      </svg>
    </p>
    </p>
    <h1 class="head">{{ i18n.$t("include") }}</h1>
    <p class="bg-light-gray bg-opacity-5 py-3 px-4 mt-4 rounded relative overflow-hidden">
      <code class="font-code">{{ codeText[1] }}</code>
    <p @click="copy(codeText[1])" class="absolute right-0 top-0 bg-gray/30 rounded p-1 text-xs cursor-pointer">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z">
        </path>
      </svg>
    </p>
    </p>
    <h1 class="head">TypeScript {{ i18n.$t("include") }}</h1>
    <p class="bg-light-gray bg-opacity-5 py-3 px-4 mt-4 rounded relative overflow-hidden">
      <code class="font-code">{{ codeText[2] }}</code>
    <p @click="copy(codeText[2])" class="absolute right-0 top-0 bg-gray/30 rounded p-1 text-xs cursor-pointer">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z">
        </path>
      </svg>
    </p>
    </p>
  </section>
</template>

<script setup>
import Header from "../../components/Header.vue";
import { useI18n } from "../../plugins/i18n";
import useClipboard from "vue-clipboard3";
import { ref } from "vue";
const i18n = useI18n();
let scrollBehavior = () => {
  document.getElementById("app")?.scrollIntoView({ behavior: "smooth" });
};
scrollBehavior();

const { toClipboard } = useClipboard();
const codeText = ref([
  "npm install vue3-table-lite --save",
  "import VueTableLite from 'vue3-table-lite'",
  "import VueTableLite from 'vue3-table-lite/ts'",
]);

const copy = async (text) => {
  try {
    await toClipboard(text);
    console.log("Copied to clipboard");
  } catch (e) {
    console.error(e);
  }
};
</script>
<style scoped>
.head {
  @apply border-b border-green border-opacity-25 mt-4 py-3 text-2xl font-semibold px-3;
}
</style>
