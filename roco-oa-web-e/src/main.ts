import { createApp } from 'vue';
import ajax from '@/plugins/ajax';
import router from '@/router/index';
import store from '@/store/index';
import ElementPlus, { ElMessage } from 'element-plus';

import 'element-plus/lib/theme-chalk/index.css';

import App from './App.vue';

import '@/assets/css/main.css';

const app = createApp(App);
app.use(router);
app.use(ajax);
app.use(store);
app.use(ElementPlus);
app.provide('$message', ElMessage);

app.mount('#app');
