import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/index'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
app.use(VueAxios, axios)

app.use(store).use(router).mount('#app')
