<template>
  <section
    class="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-900 via-zinc-900 to-emerald-900 min-h-screen text-white 2xl:container 2xl:mx-auto 2xl:relative"
  >
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
            class="block w-full px-12 py-3 text-sm font-medium text-primary bg-green rounded shadow sm:w-auto"
            to="/quick-start"
          >
            Get Started
          </router-link>

          <a
            target="_blank"
            href="https://github.com/linmasahiro/vue3-table-lite"
            class="block w-full px-12 py-3 text-sm font-medium text-green rounded shadow sm:w-auto hover:bg-green hover:text-primary border transition ease-in-out duration-300"
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
          class="absolute right-4 top-4 md:right-12 md:top-12 inline-block text-left"
        >
          <div>
            <button
              @click="showLanguageSelector = !showLanguageSelector"
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-zinc-700 shadow-sm px-4 py-2 bg-zinc-900 text-white text-sm font-medium focus:outline-none"
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
            class="origin-top-right absolute right-0 mt-2 w-56 text-white rounded-md shadow-lg bg-zinc-900 focus:outline-none"
          >
            <div class="py-1 cursor-pointer">
              <div
                @click="changeLang('en', 'English')"
                class="hover:bg-zinc-800 block px-4 py-2 text-sm"
              >
                English
              </div>
              <div
                @click="changeLang('jp', '日本語')"
                class="hover:bg-zinc-800 block px-4 py-2 text-sm"
              >
                日本語
              </div>
              <div
                @click="changeLang('tw', '繁體中文')"
                class="hover:bg-zinc-800 block px-4 py-2 text-sm"
              >
                繁體中文
              </div>
              <div
                @click="changeLang('cn', '简体中文')"
                class="hover:bg-zinc-800 block px-4 py-2 text-sm"
              >
                简体中文
              </div>
            </div>
          </div>
          <div class="fixed bottom-0 right-5">
            <p class="text-xs">
              Page viewed: &nbsp;<span class="text-green px-1">
                {{ pageViewed }}</span
              >&nbsp;times
            </p>
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
let pageViewed = ref("Loading");

fetch("https://api.countapi.xyz/hit/vue3-lite-table.vercel.app/visits", {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    pageViewed.value = data.value;
  });
</script>

<style>
::-webkit-scrollbar {
  width: 8px;
  height: 4px;
}
.bg-hero {
  background: linear-gradient(
      327.21deg,
      #05966873 3.65%,
      rgba(0, 136, 7, 0) 40.32%
    ),
    linear-gradient(
      245.93deg,
      rgba(21, 209, 71, 0.16) 0%,
      rgba(74, 209, 25, 0) 36.63%
    ),
    linear-gradient(
      147.6deg,
      rgba(19, 255, 27, 0) 29.79%,
      rgba(31, 255, 19, 0.01) 85.72%
    ),
    #13111c;
}
::-webkit-scrollbar-track {
  @apply bg-primary;
}

::-webkit-scrollbar-thumb {
  @apply bg-secondary rounded-full;
}
</style>
