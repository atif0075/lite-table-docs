<template>
  <section class="relative box-border">
    <div
      class="h-16 p-2 fixed z-10000 bg-dark w-full lg:w-[80%] flex flex-col justify-center border-b border-opacity-60 border-light-dark"
    >
      <div class="flex justify-between pr-4">
        <router-link
          to="/"
          class="text-gray flex items-center font-bold text-xl tracking-wider"
        >
          <img
            class="w-6 sm:w-8 mx-1 lg:hidden"
            src="../assets/logo.svg"
            alt="logo"
          />
          <span class="lg:hidden text-sm sm:text-xl">
            Vue3 Table Lite - &nbsp; </span
          ><span class="text-sm sm:text-xl"> {{ title }}</span>
        </router-link>
        <button>
          <a
            class="github-button"
            href="https://github.com/linmasahiro/vue3-table-lite"
            data-size="large"
            data-show-count="true"
            aria-label="Star linmasahiro/vue3-table-lite on GitHub"
            >Star</a
          >
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps({
  title: String,
});
</script>
