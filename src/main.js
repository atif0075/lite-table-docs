import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./routes/routes";
import VueCodeHighlight from "vue-code-highlight";
import VueClickAway from "vue3-click-away";
import VueHighlightJS from "vue3-highlightjs";
import "highlight.js/styles/night-owl.css";
createApp(App)
  .use(VueCodeHighlight)
  .use(VueClickAway)
  .use(router)
  .use(VueHighlightJS)
  .mount("#app");
