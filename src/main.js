import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import HelloWorld from "./components/HelloWorld.vue"
//这是em转px工具
import 'amfe-flexible/index.js'
createApp(App).component("HelloWorld",HelloWorld).use(store).use(router).mount('#app')
