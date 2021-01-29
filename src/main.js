import router from './router';
import store from './store';
import { createApp } from 'vue';
import App from './App.vue';
import installElementPlus from './plugins/element.js';

const app = createApp(App).use(store).use(router);
installElementPlus(app);
app.mount('#app');