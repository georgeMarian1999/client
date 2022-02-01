import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/styles/global.scss';
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false;

//create cart
let cart = [];
if (localStorage.getItem('cart') ===  null) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
