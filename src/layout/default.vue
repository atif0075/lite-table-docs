<template>
  <section class="w-full flex bg-dark ">
    <main
      :class="[toggle ? 'hidden' : 'animate-slide-in-left']"
      class="w-[80%] absolute z-9999 bg-dark lg:(w-[20%] static animate-none) min-h-screen h-screen overflow-auto"
    >
      <div
        class="h-16 p-2 fixed bg-dark w-[20%] flex flex-col justify-center border-b border-opacity-60 border-light-dark"
      >
        <router-link
          to="/"
          class="text-gray font-bold text-xl tracking-wider hidden lg:flex items-center"
        >
          <div>
            <img class="w-8 mx-1" src="../assets/logo.svg" alt="logo" />
          </div>
          <h1>Vue3 Table Lite</h1>
        </router-link>
      </div>

      <div>
        <div class="pt-20 px-4">
          <main class="flex justify-between items-center">
            <div>
              <GithubButton
                class="lg:hidden"
                href="https://github.com/linmasahiro/vue3-table-lite"
                data-icon="octicon-star"
                data-size="small"
                data-show-count="true"
                aria-label="Star linmasahiro/vue3-table-lite on GitHub"
                >Star</GithubButton
              >
            </div>
            <div class="relative inline-block text-left">
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
          </main>
        </div>
        <ul v-for="(mainMenu, i) in menu" :key="i" class="p-2">
          <li>
            <router-link :to="mainMenu.url" type="button" class="ulBtn">
              <span
                class="flex-1 text-left whitespace-nowrap"
                sidebar-toggle-item
                >{{ mainMenu.title }}</span
              >
            </router-link>
            <ul class="py-2 space-y-2 capitalize">
              <template v-for="(submenu, j) in mainMenu.submenu" :key="j">
                <router-link
                  :to="mainMenu.url + submenu.hash"
                  custom
                  v-slot="{ href, navigate }"
                >
                  <li class="list-item">
                    <a
                      :href="href"
                      @click="
                        (e) => {
                          toggle = scWidth < 1024;
                          return navigate(e);
                        }
                      "
                      >{{ submenu.title }}</a
                    >
                  </li>
                </router-link>
              </template>
            </ul>
          </li>
        </ul>
      </div>
    </main>
    <main
      class="w-full lg:w-[80%] text-gray h-screen overflow-auto overflow-x-hidden min-h-screen"
    >
      <button
        @click="toggle = !toggle"
        class="fixed right-2 top-5 z-99999 lg:hidden"
      >
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div @click="clickAway">
        <router-view />
      </div>
    </main>
  </section>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import { useI18n } from "../plugins/i18n";
import GithubButton from "vue-github-button";
let toggle = ref(false);
const i18n = useI18n();

watch(
  () => i18n.locale.value,
  () => {
    initMenu();
  }
);

let showLanguageSelector = ref(false);
let currentLangName = ref(i18n.locale.value);
let changeLang = (lang, name) => {
  i18n.locale.value = lang;
  currentLangName.value = name;
  showLanguageSelector.value = false;
};

onMounted(() => {
  onresize();
  if (i18n.locale.value === "en") {
    currentLangName.value = "English";
  } else if (i18n.locale.value === "jp") {
    currentLangName.value = "日本語";
  } else if (i18n.locale.value === "tw") {
    currentLangName.value = "繁體中文";
  } else if (i18n.locale.value === "cn") {
    currentLangName.value = "简体中文";
  }
});
let scWidth = ref();
let onresize = () => {
  scWidth.value = document.body.clientWidth;
  if (scWidth.value < 1024) {
    toggle.value = true;
  } else {
    toggle.value = false;
  }
  // updated
};
window.addEventListener("resize", onresize);

let clickAway = () => {
  if (scWidth.value < 1024 && toggle.value == false) {
    toggle.value = true;
  }
};

const menu = ref([]);
const initMenu = () => {
  menu.value = [
    {
      title: i18n.$t("quick_start"),
      url: "/quick-start",
      submenu: [
        {
          title: i18n.$t("install"),
          hash: "#install",
        },
        {
          title: i18n.$t("include"),
          hash: "#include",
        },
        {
          title: "TypeScript",
          hash: "#typescript",
        },
      ],
    },
    {
      title: i18n.$t("usage"),
      url: "/usage",
      submenu: [
        {
          title: i18n.$t("default_mode"),
          hash: "#defMode",
        },
        {
          title: i18n.$t("slot_mode"),
          hash: "#slotMode",
        },
        {
          title: i18n.$t("static_mode"),
          hash: "#staticMode",
        },
      ],
    },
    {
      title: i18n.$t("api_reference"),
      url: "/api-reference",
      submenu: [
        {
          title: i18n.$t("props"),
          hash: "#props",
        },
        {
          title: i18n.$t("events"),
          hash: "#events",
        },
        {
          title: i18n.$t("slots"),
          hash: "#slots",
        },
      ],
    },
    {
      title: i18n.$t("simple_examples"),
      url: "/simple-examples",
      submenu: [
        {
          title: i18n.$t("default_mode"),
          hash: "#defMode",
        },
        {
          title: i18n.$t("slot_mode"),
          hash: "#slotMode",
        },
        {
          title: i18n.$t("static_mode"),
          hash: "#staticMode",
        },
      ],
    },
    {
      title: i18n.$t("advance_examples"),
      url: "/advance-examples",
      submenu: [
        {
          title: i18n.$t("customize_display_data"),
          hash: "#customize-display-data",
        },
        {
          title: i18n.$t("filter"),
          hash: "#filter",
        },
        {
          title: i18n.$t("asynchronous_filter"),
          hash: "#asynchronous-filter",
        },
        {
          title: i18n.$t("filter_in_table"),
          hash: "#filter-in-table",
        },
        {
          title: i18n.$t("customize_style"),
          hash: "#customize-style",
        },
        {
          title: i18n.$t("customize_style_2"),
          hash: "#customize-style-2",
        },
        {
          title: i18n.$t("customize_message"),
          hash: "#customize-message",
        },
        {
          title: i18n.$t("customize_page_dropdown"),
          hash: "#customize-page-dropdown",
        },
        {
          title: i18n.$t("catch_row_clicked"),
          hash: "#catch-row-clicked",
        },
        {
          title: i18n.$t("fixed_first_column"),
          hash: "#fixed-first-column",
        },
        {
          title: i18n.$t("fixed_header_and_first_column"),
          hash: "#fixed-header-and-first-column",
        },
        {
          title: i18n.$t("show_controls"),
          hash: "#show-controls",
        },
        {
          title: i18n.$t("grouping_with_toggle"),
          hash: "#grouping",
        },
        {
          title: i18n.$t("grouping"),
          hash: "#grouping2",
        },
      ],
    },
  ];
};
initMenu();
</script>

<style lang="postcss">
.list-item {
  @apply flex items-center w-full p-2 text-base font-normal text-light-gray hover:text-gray pl-7;
}
.ulBtn {
  @apply flex items-center w-full p-2 text-base font-normal text-gray rounded;
}
.animate-slide-in-left {
  -webkit-animation: slideInLeft 0.5s ease-in-out;
  animation: slideInLeft 0.5s ease-in-out;
}

::-webkit-scrollbar {
  width: 8px;
  height: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  @apply bg-dark;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-light-dark rounded-full;
}
</style>
