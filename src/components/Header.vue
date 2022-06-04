<template>
  <section class="relative">
    <div
      class="h-16 p-2 fixed z-10000 bg-dark w-full lg:w-[80%] flex flex-col justify-center border-b border-opacity-60 border-light-dark"
    >
      <h1 class="text-gray flex items-center font-bold text-xl tracking-wider">
        <img class="w-6 sm:w-8 mx-1" src="../assets/logo.svg" alt="logo" />
        <span class="lg:hidden text-sm sm:text-xl"> Vue3 Table Lite -</span
        ><span class="text-sm sm:text-xl"> {{ title }}</span>
      </h1>
    </div>
  </section>
</template>
<script setup>
defineProps({
  title: String,
});
</script>
