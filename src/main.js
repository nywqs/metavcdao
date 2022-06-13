import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './assets/style/global.scss'
import router from './router/router'
import i18n from './lang/index'  // 引入
const app = createApp(App)
app.use(router).use(i18n).mount('#app')
