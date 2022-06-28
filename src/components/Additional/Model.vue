<template>
  <section>
    <main>
      <div
        class="bg-dark sm:p-5 text-white h-full min-h-120 overflow-scroll px-2 rounded"
      >
        <h1 class="text-center py-4 font-bold text-sm sm:text-xl uppercase">
          {{ App }}
        </h1>
        <main class="flex-cen flex-col">
          <div class="sm:min-w-sm min-w-full pt-10">
            <p class="text-xs py-2">Subject and marks</p>
            <main v-for="items in allSubs" :key="items">
              <div class="flex-bet border-b border-[#e6e6e6] pb-1">
                <h1 class="font-bold sm:text-xl">{{ items.name }}</h1>
                <h1 class="font-bold sm:text-xl">
                  {{ items.percentage }}
                </h1>
              </div>
            </main>
          </div>

          <div class="sm:min-w-sm min-w-full pt-10">
            <p class="text-xs">Total Marks</p>
            <h1 class="font-bold sm:text-xl">{{ marks }}</h1>
          </div>
        </main>
      </div>
    </main>
  </section>
</template>
<script setup>
defineProps({
  App: String,
  allSubs: Array,
  marks: String,
});
</script>
<style scoped></style>
