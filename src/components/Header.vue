<template>
  <div
    class="sticky w-full top-0 right-0 h-16 p-2 z-99 glass top-0 flex flex-col justify-center border-b border-opacity-60 border-secondary"
  >
    <div class="flex justify-between pr-4">
      <div class="text-gray flex items-center font-bold text-xl tracking-wider">
        <img
          class="w-6 sm:w-8 mx-1 lg:hidden"
          src="../assets/logo.svg"
          alt="logo"
        />
        <router-link to="/" class="lg:hidden text-sm sm:text-xl">
          Vue3 Table Lite - &nbsp; </router-link
        ><span class="text-sm sm:text-xl"> {{ title }}</span>
      </div>

      <div>
        <GithubButton
          class="hidden lg:block"
          href="https://github.com/linmasahiro/vue3-table-lite"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star linmasahiro/vue3-table-lite on GitHub"
          >Star on Github</GithubButton
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import GithubButton from "vue-github-button";
defineProps({
  title: String,
});
</script>
<style></style>
