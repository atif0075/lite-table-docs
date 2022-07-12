<template>
  <section class="bg-dark min-h-screen text-white 2xl:container 2xl:mx-auto 2xl:relative">
    <div
      class="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex"
    >
      <div class="max-w-xl mx-auto text-center">
        <div class="flex justify-center items-center">
          <img class="w-28" src="../assets/logo.svg" alt="logo" />
        </div>
        <h1 class="text-3xl font-extrabold sm:text-5xl">
          Vue 3 Table Lite
          <strong class="font-extrabold text-green sm:block">
            Light Weight, Faster
          </strong>
        </h1>

        <p class="mt-4 sm:leading-relaxed sm:text-xl">
          {{ i18n.$t("component_description") }}
        </p>

        <div class="flex flex-wrap justify-center gap-4 mt-8">
          <router-link
            class="block w-full px-12 py-3 text-sm font-medium text-dark bg-green rounded shadow sm:w-auto"
            to="/quick-start"
          >
            Get Started
          </router-link>

          <a
            target="_blank"
            href="https://github.com/linmasahiro/vue3-table-lite"
            class="block w-full px-12 py-3 text-sm font-medium text-green rounded shadow sm:w-auto hover:(bg-green text-dark) border transition ease-in duration-200"
          >
            Source Code
          </a>
          <footer class="w-full flex text-sm justify-center items-center">
            <div class="px-2">Created by</div>
            <div>
              <github-button
                href="https://github.com/linmasahiro"
                aria-label="Follow @linmasahiro on GitHub"
                >Linmasahiro</github-button
              >
            </div>
            <div class="px-2">Styled by</div>
            <div>
              <github-button
                href="https://github.com/atif0075"
                aria-label="Follow @atif0075 on GitHub"
                >Atif</github-button
              >
            </div>
          </footer>
        </div>

        <div
          class="absolute right-4 top-4 md:(right-12 top-12) inline-block text-left"
        >
          <div>
            <button
              @click="showLanguageSelector = !showLanguageSelector"
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-dark shadow-sm px-4 py-2 bg-light-dark text-white text-sm font-medium focus:outline-none"
            >
              {{ currentLangName }}
              <svg
                class="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            v-if="showLanguageSelector"
            class="origin-top-right absolute right-0 mt-2 w-56 text-white rounded-md shadow-lg bg-light-dark focus:outline-none"
          >
            <div class="py-1 cursor-pointer">
              <div
                @click="changeLang('en', 'English')"
                class="hover:bg-dark/40 block px-4 py-2 text-sm"
              >
                English
              </div>
              <div
                @click="changeLang('jp', '日本語')"
                class="hover:bg-dark/40 block px-4 py-2 text-sm"
              >
                日本語
              </div>
              <div
                @click="changeLang('tw', '繁體中文')"
                class="hover:bg-dark/40 block px-4 py-2 text-sm"
              >
                繁體中文
              </div>
              <div
                @click="changeLang('cn', '简体中文')"
                class="hover:bg-dark/40 block px-4 py-2 text-sm"
              >
                简体中文
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "../plugins/i18n";
import GithubButton from "vue-github-button";
const i18n = useI18n();
let showLanguageSelector = ref(false);
let currentLangName = ref("English");
let changeLang = (lang, name) => {
  i18n.locale.value = lang;
  currentLangName.value = name;
  showLanguageSelector.value = false;
};
</script>

<style>
::-webkit-scrollbar {
  width: 8px;
  height: 4px;
}

::-webkit-scrollbar-track {
  @apply bg-dark;
}

::-webkit-scrollbar-thumb {
  @apply bg-light-dark rounded-full;
}
</style>
