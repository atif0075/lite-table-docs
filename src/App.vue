<template>
  <main class="bg-primary">
    <div class="">
      <router-view />
    </div>
  </main>
</template>

<script setup>
// Plugins
import { provideI18n } from "./plugins/i18n";

// Language Files
import en from "./locales/en.js";
import jp from "./locales/jp.js";
import tw from "./locales/tw.js";
import cn from "./locales/cn.js";

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
.hljs {
  @apply !bg-transparent;
}
.quick-btn {
  @apply px-4 py-2  bg-secondary text-white rounded;
}
@font-face {
  font-family: "Dank Mono";
  font-style: normal;
  src: url(./assets/Dankmono.otf) format("otf");
}
</style>
