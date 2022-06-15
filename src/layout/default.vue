<template>
  <section class="w-full flex bg-dark">
    <main
      :class="[toggle ? 'hidden' : 'animate-slide-in-left']"
      class="w-[80%] absolute z-9999 bg-dark lg:(w-[20%] static animate-none) min-h-screen h-screen overflow-auto"
    >
      <div
        class="h-16 p-2 fixed bg-dark w-[20%] flex flex-col justify-center border-b border-opacity-60 border-light-dark"
      >
        <div
          class="text-gray font-bold text-xl tracking-wider hidden lg:flex items-center"
        >
          <div>
            <img class="w-8 mx-1" src="../assets/logo.svg" alt="logo" />
          </div>
          <h1>Vue3 Table Lite</h1>
        </div>
      </div>

      <div>
        <ul v-for="(menu, i) in menus" :key="i" class="p-2" :class="{'pt-20': i ==0 }">
          <li>
            <router-link :to="menu.url" type="button" class="ulBtn">
              <span
                class="flex-1 text-left whitespace-nowrap"
                sidebar-toggle-item
                >{{ menu.title }}</span
              >
            </router-link>
            <ul class="py-2 space-y-2 capitalize">
              <template v-for="(submenu, j) in menu.submenu" :key="j">
                <router-link
                  :to="menu.url + submenu.hash"
                  custom
                  v-slot="{ href, navigate }"
                >
                  <li class="list-item">
                    <a :href="href" @click="navigate">{{ submenu.title}}</a>
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
        class="absolute right-2 top-4 z-10200 lg:hidden"
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
import { onMounted, ref } from "vue";
let toggle = ref(false);

onMounted(() => {
  onresize();
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

const menus = ref([
  {
    title: 'Quick start',
    url: '/quick-start',
    submenu: [
      {
        title: 'Install',
        hash: '#install',
      },
      {
        title: 'Include',
        hash: '#include',
      },
      {
        title: 'TypeScript',
        hash: '#typescript',
      }
    ]
  },
  {
    title: 'Usage',
    url: '/usage',
    submenu: [
      {
        title: 'Default mode',
        hash: '#defMode',
      },
      {
        title: 'V-slot mode',
        hash: '#slotMode',
      },
      {
        title: 'Static mode',
        hash: '#staticMode',
      }
    ]
  },
  {
    title: 'Api reference',
    url: '/api-reference',
    submenu: [
      {
        title: 'Props',
        hash: '#props',
      },
      {
        title: 'Events',
        hash: '#events',
      },
      {
        title: 'Slots',
        hash: '#slots',
      }
    ]
  },
  {
    title: 'Simple Examples',
    url: '/simple-examples',
    submenu: [
      {
        title: 'Default mode',
        hash: '#defMode',
      },
      {
        title: 'V-slot mode',
        hash: '#slotMode',
      },
      {
        title: 'Static mode',
        hash: '#staticMode',
      }
    ]
  },
  {
    title: 'Advance examples',
    url: '/advance-examples',
    submenu: [
      {
        title: 'Customize display data',
        hash: '#customize-display-data',
      },
      {
        title: 'Filter',
        hash: '#filter',
      },
      {
        title: 'Asynchronous filter',
        hash: '#asynchronous-filter',
      },
      {
        title: 'Customize style',
        hash: '#customize-style',
      },
      {
        title: 'Customize style2',
        hash: '#customize-style-2',
      },
      {
        title: 'Customize message',
        hash: '#customize-message',
      },
      {
        title: 'Customize page\'s dropdown',
        hash: '#customize-page-dropdown',
      },
      {
        title: 'Catch row clicked',
        hash: '#catch-row-clicked',
      },
      {
        title: 'Fixed first column',
        hash: '#fixed-first-column',
      }
    ]
  }
])
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
