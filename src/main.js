import Vue from 'vue'
import App from "./App.vue";
import router from './router/index.js'
import i18n from './lang/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
