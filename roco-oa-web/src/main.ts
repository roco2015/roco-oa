import { createApp } from 'vue';
import ajax from '@/plugins/ajax';
import router from '@/router/index';
import { ElButton } from 'element-plus';
import App from './App.vue';

import '@/assets/css/main.css';

const app = createApp(App);
app.use(router);
app.use(ajax);

// element
app.component(ElButton.name, ElButton);

app.mount('#app');
