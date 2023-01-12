import { createApp } from 'vue'
import App from './App.vue'
import router from './Router.js'
import style from './style.vue'

let app = createApp(App);
app.use(router);
app.use(style);
app.mount('#app');
// import { defineCustomElement } from 'vue';
// import a from './components/a.ce.vue';
// const element = defineCustomElement(a);
// customElements.define("test-a", element);