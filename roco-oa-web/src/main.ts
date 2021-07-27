import { createApp } from 'vue';
import ajax from '@/plugins/ajax';
import router from '@/router/index';
import store from '@/store/index';
import vuetify from '@/plugins/vuetify';
import App from './App.vue';

import '@/assets/css/main.css';

const app = createApp(App);
app.use(router);
app.use(ajax);
app.use(vuetify);
app.use(store);

app.mount('#app');
