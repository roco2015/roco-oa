import type { App } from 'vue';
import axios from 'axios';

const instance = axios.create();
// instance.interceptors.request.use
// instance.interceptors.response.use;
export default {
  install: (app: App) => {
    app.config.globalProperties.ajax = instance;
    app.provide('ajax', instance);
  },
};

export { instance as $http };
