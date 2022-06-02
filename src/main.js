import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi.css";
import router from "./routes/routes";
import VueCodeHighlight from "vue-code-highlight";
createApp(App)
  .use(VueCodeHighlight)
  .use(router)
  .mount("#app");
