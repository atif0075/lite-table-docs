<template>
  <section>
    <Header title="Simple Examples" />
    <section class="pt-20 px-3 pb-10">
      <div id="defMode">
        <h1 class="head">Default Mode</h1>
        <PropExp class="pt-3" />
      </div>
      <div id="slotMode">
        <h1 class="head">V-Slot Mode</h1>
        <VslotMode class="pt-3" />
      </div>
      <div id="staticMode">
        <h1 class="head">Static Mode</h1>
        <StaticExp class="pt-3" />
      </div>
    </section>
  </section>
</template>
<script  setup>
import { ref } from "vue";
import Header from "../../components/Header.vue";
import PropExp from "../../components/simple-examples/prop-exp.vue";
import VslotMode from "../../components/simple-examples/vslot-mode.vue";
import StaticExp from "../../components/simple-examples/static-exp.vue";
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
