import "./styles/styles.less";

import { createApp } from "vue";
import App from "./app.vue";
import { router } from "./providers/router";
import ToastService from "primevue/toastservice";
import PrimeVue from "primevue/config";

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(ToastService);

app.mount("#app");
