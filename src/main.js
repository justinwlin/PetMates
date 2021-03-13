import router from './router';
import store from './store';
import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import installElementPlus from './plugins/element.js';

const app = createApp(App).use(store).use(router);
app.config.globalProperties.axios=axios;
installElementPlus(app);
app.mount('#app');