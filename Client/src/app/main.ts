import "./styles/styles.less";

import { createApp } from "vue";
import App from "./app.vue";
import { router } from "./providers/router";

const app = createApp(App);

app.use(router);

app.mount("#app");
