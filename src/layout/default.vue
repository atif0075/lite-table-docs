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
        <ul class="p-2 pt-20">
          <li>
            <router-link to="/quick-start" type="button" class="ulBtn">
              <span
                class="flex-1 text-left whitespace-nowrap"
                sidebar-toggle-item
                >Quick Start</span
              >
            </router-link>
            <ul class="py-2 space-y-2 capitalize">
              <li>
                <a href="#install" class="list-item">Install</a>
              </li>
              <li>
                <a href="#include" class="list-item">Include</a>
              </li>
              <li>
                <a href="#typescript" class="list-item">TypeScript</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="p-2">
          <li>
            <router-link to="/usage" type="button" class="ulBtn">
              <span
                class="flex-1 text-left whitespace-nowrap"
                sidebar-toggle-item
                >Usage</span
              >
            </router-link>
            <ul class="py-2 space-y-2 capitalize">
              <li>
                <a href="#defMode" class="list-item">Default Mode</a>
              </li>
              <li>
                <a href="#slotMode" class="list-item">V-slot Mode</a>
              </li>
              <li>
                <a href="#staticMode" class="list-item">Static Mode</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="p-2">
          <li>
            <router-link to="/api-reference" type="button" class="ulBtn">
              <span
                class="flex-1 text-left whitespace-nowrap"
                sidebar-toggle-item
                >API Reference</span
              >
            </router-link>
            <ul class="py-2 space-y-2 capitalize">
              <li>
                <a href="#props" class="list-item">Props</a>
              </li>
              <li>
                <a href="#events" class="list-item">Event</a>
              </li>
              <li>
                <a href="#slots" class="list-item">Slots</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="p-2">
          <li>
            <router-link to="/simple-examples" type="button" class="ulBtn">
              <span
                class="flex-1 text-left whitespace-nowrap"
                sidebar-toggle-item
                >Simple example</span
              >
            </router-link>
            <ul class="py-2 space-y-2 capitalize">
              <li>
                <a href="#defMode" class="list-item">Default Mode</a>
              </li>
              <li>
                <a href="#slotMode" class="list-item">V-slot Mode</a>
              </li>
              <li>
                <a href="#staticMode" class="list-item">Static Mode</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="p-2">
          <li>
            <router-link to="/advance-examples" type="button" class="ulBtn">
              <span
                class="flex-1 text-left whitespace-nowrap"
                sidebar-toggle-item
                >Advanced Example</span
              >
            </router-link>
            <ul class="py-2 space-y-2 capitalize">
              <li>
                <a href="#customize-display-data" class="list-item"
                  >Customize Display Data</a
                >
              </li>
              <li>
                <a href="#filter" class="list-item">Filter</a>
              </li>
              <li>
                <a href="#asynchronous-filter" class="list-item"
                  >Asynchronous Filter</a
                >
              </li>
              <li>
                <a href="#customize-style" class="list-item">Customize Style</a>
              </li>
              <li>
                <a href="#customize-style-2" class="list-item"
                  >Customize Style 2</a
                >
              </li>
              <li>
                <a href="#customize-message" class="list-item"
                  >Customize Message</a
                >
              </li>
              <li>
                <a href="#customize-page-dropdown" class="list-item"
                  >Customize Page's Dropdown</a
                >
              </li>
              <li>
                <a href="#catch-row-clicked" class="list-item"
                  >Catch Row Clicked</a
                >
              </li>
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
      <div>
        <router-view id="secRoute" />
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
