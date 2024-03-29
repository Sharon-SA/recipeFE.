import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap"
import "@popperjs/core"
import "bootstrap/js/src/dropdown"



createApp(App).use(store, axios).use(router).mount('#app')
