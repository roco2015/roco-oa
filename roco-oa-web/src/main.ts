import { createApp } from 'vue';
import ajax from '@/plugins/ajax';
import router from '@/router/index';
import {
  ElAside, ElButton, ElContainer, ElHeader, ElMain,
} from 'element-plus';
import App from './App.vue';

import '@/assets/css/main.css';

const app = createApp(App);
app.use(router);
app.use(ajax);

// element
app.component(ElAside.name, ElAside);
app.component(ElButton.name, ElButton);
app.component(ElContainer.name, ElContainer);
app.component(ElHeader.name, ElHeader);
app.component(ElMain.name, ElMain);

app.mount('#app');
