<template>
  <main class="bg-dark">
    <div class="2xl:(container mx-auto)">
      <router-view />
    </div>
  </main>
</template>

<style>
* {
  scroll-behavior: smooth;
}
.quick-btn {
  @apply px-4 py-2 bg-light-dark text-white rounded;
}
</style>
