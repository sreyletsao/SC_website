import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import 'keen-slider/keen-slider.min.css'
import apiInstance from './plugin/axios'


const app = createApp(App)

app.use(router)
app.config.globalProperties.$axios = apiInstance
app.mount('#app')
