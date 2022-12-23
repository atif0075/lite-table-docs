<template>
  <section class="w-full flex bg-primary">
    <main
      :class="[toggle ? 'hidden' : 'animate-slide-in-left']"
      class="w-[80%] bg-primary border-r border-white border-opacity-10 absolute z-98 lg:w-[20%] lg:relative lg:animate-none min-h-screen h-screen overflow-auto"
    >
      <div
        class="h-16 p-2 sticky z-10 glass w-full top-0 left-0 flex flex-col justify-center border-b border-opacity-60 border-secondary"
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
        <div class="pt-5 px-4">
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
            <div class="relative z-1 inline-block text-left">
              <div>
                <button
                  @click="showLanguageSelector = !showLanguageSelector"
                  type="button"
                  class="inline-flex justify-center w-full rounded-md border border-zinc-800 shadow-sm px-4 py-2 bg-zinc-900 text-white text-sm font-medium focus:outline-none"
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
            </div>
          </main>
        </div>
        <ul v-for="(mainMenu, i) in menu" :key="i" class="p-2">
          <li>
            <router-link :to="mainMenu.url" type="button" class="ulBtn">
              <span
                class="flex-bet w-full text-left whitespace-nowrap"
                sidebar-toggle-item
                @click="toggleChild(menu, mainMenu.id)"
                >{{ mainMenu.title }}
                <svg
                  :class="
                    mainMenu.showChild ? 'rotate-180 text-green' : 'rotate-0'
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </router-link>
            <ul v-if="mainMenu.showChild" class="py-2 capitalize">
              <template v-for="(submenu, j) in mainMenu.submenu" :key="j">
                <router-link
                  :to="mainMenu.url + submenu.hash"
                  custom
                  v-slot="{ href, navigate }"
                >
                  <li class="list-item">
                    <a
                      class="anchor pl-4 border-l p-2 border-zinc-600 hover:border-green hover:text-green duration-300 ease-in-out transition-all"
                      :id="submenu.hash"
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
        class="fixed right-2 top-5 z-100 lg:hidden"
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
import { useRoute } from "vue-router";
let toggle = ref(false);
let route = useRoute();
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
let toggleChild = (menu, id) => {
  menu.forEach((item) => {
    if (item.id !== id) {
      item.showChild = false;
    } else {
      item.showChild = !item.showChild;
    }
  });
};
let addActiveAnchor = () => {
  let allChild = document.getElementsByClassName("anchor");
  for (let i = 0; i < allChild.length; i++) {
    allChild[i].classList.remove(...["!border-green", "!text-green"]);
  }
  let activeChild = document.getElementById(`${route.hash}`);
  if (activeChild) {
    activeChild.classList.add(...["!border-green", "!text-green"]);
  }
};

onMounted(() => {
  initMenu();

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
  setTimeout(() => {
    addActiveAnchor();
  }, 300);
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
      id: 1,
      showChild: true,
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
      id: 2,
      showChild: false,
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
      id: 3,
      showChild: false,
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
      id: 4,
      showChild: false,
      title: i18n.$t("simple_examples"),
      url: "/simple-examples",
      submenu: [
        {
          title: i18n.$t("default_mode"),
          hash: "#defModeExample",
        },
        {
          title: i18n.$t("slot_mode"),
          hash: "#slotModeExample",
        },
        {
          title: i18n.$t("static_mode"),
          hash: "#staticModeExample",
        },
      ],
    },
    {
      id: 5,
      showChild: false,
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
  menu.value.forEach((item) => {
    item.showChild = false;
    item.submenu.forEach((sub) => {
      if (sub.hash === route.hash) {
        item.showChild = true;
      }
    });
  });
};

watch(
  () => route.hash,
  (val) => {
    if (val) {
      console.log(val);
      let allChild = document.querySelectorAll(".anchor");
      allChild.forEach((item) => {
        item.classList.remove(...["!text-green", "!border-green"]);
      });
      let activeChild = document.getElementById(`${val}`);
      if (activeChild) {
        activeChild.classList.add(...["!border-green", "!text-green"]);
      }
    }
  }
);
</script>

<style lang="postcss">
.list-item {
  @apply flex items-center w-full text-base font-normal text-light-gray hover:text-gray pl-5;
}
.ulBtn {
  @apply flex items-center w-full p-2 text-base font-normal text-gray rounded;
}
.animate-slide-in-left {
  -webkit-animation: slideInLeft 0.5s ease-in-out;
  animation: slideInLeft 0.5s ease-in-out;
}

::-webkit-scrollbar {
  width: 0;
}
</style>
