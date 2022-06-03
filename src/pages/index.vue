<template>
  <section class="bg-dark min-h-screen text-white">
    <div
      class="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex"
    >
      <div class="max-w-xl mx-auto text-center">
        <h1 class="text-3xl font-extrabold sm:text-5xl">
          Vue 3 Table Lite
          <strong class="font-extrabold text-green sm:block">
            Light Weight, Faster
          </strong>
        </h1>

        <p class="mt-4 sm:leading-relaxed sm:text-xl">
          A simple and lightweight data table component for Vue.js 3. Features
          sorting, paging, row check, dynamic data rendering, supported
          TypeScript, and more.
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
        </div>
      </div>
    </div>
  </section>
</template>
