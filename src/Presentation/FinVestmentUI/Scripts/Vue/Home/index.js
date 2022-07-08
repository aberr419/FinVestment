
import { createApp } from 'vue';
import HomeComponent from './Home.vue';


const app = createApp(HomeComponent);

// now you can see `vueApp` within the browser console
//window.vueApp = app;

app.mount('#app');