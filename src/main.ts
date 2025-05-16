import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router';
import i18n from './i18n';
import { Icon } from '@iconify/vue';

import "@/assets/styles/global/base.css";
import "@/assets/styles/global/theme.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(i18n);

app.component('Icon', Icon);

app.mount('#app');