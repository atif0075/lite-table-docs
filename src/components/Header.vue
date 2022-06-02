<template>
  <section class="relative">
    <div
      class="h-16 p-2 fixed z-10000 bg-dark w-full lg:w-[80%] flex flex-col justify-center border-b border-opacity-60 border-light-dark"
    >
      <h1 class="text-gray font-bold text-xl tracking-wider">
        <span class="lg:hidden">Vue3 Table Lite -</span> {{ title }}
      </h1>
    </div>
  </section>
</template>
<script setup>
defineProps({
  title: String,
});
</script>
