<template>
  <section class="box-border relative">
    <div
      class="h-16 fixed w-full 2xl:w-[80%] p-2 z-99998 bg-dark top-0 flex flex-col justify-center border-b border-opacity-60 border-light-dark"
    >
      <div class="flex justify-between pr-4">
        <div
          class="text-gray flex items-center font-bold text-xl tracking-wider"
        >
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
  </section>
</template>
<script setup>
import GithubButton from "vue-github-button";
defineProps({
  title: String,
});
</script>
<style></style>
