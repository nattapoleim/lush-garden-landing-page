import './global.css';

import { createApp } from 'vue';
import VueLazyLoad from 'vue3-lazyload';
import App from './App.vue';

import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';

const app = createApp(App);
app.use(VueLazyLoad);

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);

app.mount('#app');
