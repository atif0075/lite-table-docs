<template>
  <main class="bg-dark">
    <div class="2xl:(container mx-auto)">
      <router-view />
    </div>
  </main>
</template>

<script setup>
// Plugins
import { provideI18n } from "./plugins/i18n";

// Language Files
import en from "./locales/en.json";
import jp from "./locales/jp.json";
import tw from "./locales/tw.json";
import cn from "./locales/cn.json";

provideI18n({
  locale: "en",
  messages: {
    en: en,
    jp: jp,
    tw: tw,
    cn: cn,
  },
});
</script>

<style>
* {
  scroll-behavior: smooth;
  scroll-padding-top: 5rem;
}

.quick-btn {
  @apply px-4 py-2  bg-light-dark text-white rounded;
}
@font-face {
  font-family: "Dank Mono";
  font-style: normal;
  src: url(./assets/Dankmono.otf) format("otf");
}
</style>
