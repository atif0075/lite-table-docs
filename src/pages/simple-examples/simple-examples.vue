<template>
  <section>
    <Header :title="i18n.$t('simple_examples')" />
    <section class="pt-20 px-3 pb-10">
      <div id="defMode">
        <h1 class="head">{{ i18n.$t('default_mode') }}</h1>
        <PropExp class="pt-3" />
      </div>
      <div id="slotMode">
        <h1 class="head">{{ i18n.$t('slot_mode') }}</h1>
        <VslotMode class="pt-3" />
      </div>
      <div id="staticMode">
        <h1 class="head">{{ i18n.$t('static_mode') }}</h1>
        <StaticExp class="pt-3" />
      </div>
    </section>
  </section>
</template>
<script  setup>
import Header from "../../components/Header.vue";
import PropExp from "../../components/simple-examples/prop-exp.vue";
import VslotMode from "../../components/simple-examples/vslot-mode.vue";
import StaticExp from "../../components/simple-examples/static-exp.vue";
import { useI18n } from "../../plugins/i18n";
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
