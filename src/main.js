import "./assets/main.css";
import "@mdi/font/css/materialdesignicons.css";

import { createApp } from "vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Core Deps
import router from "@/router/index.js";
import store from "@/store/index.js";

// Components
import App from "./App.vue";

const vuetify = createVuetify({
  components,
  directives,
  ssr: false,
  icons: {
    defaultSet: "mdi"
  }
});

createApp(App).use(router).use(store).use(vuetify).mount("#app");
