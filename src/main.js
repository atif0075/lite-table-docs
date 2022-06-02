import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi.css";
import router from "./routes/routes";
import VueCodeHighlight from "vue-code-highlight";
import VueClickAway from "vue3-click-away";
createApp(App)
  .use(VueClickAway)
  .use(VueCodeHighlight)
  .use(router)
  .mount("#app");
