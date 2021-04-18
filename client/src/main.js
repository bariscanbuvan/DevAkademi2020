import Vue from 'vue'
import App from './App.vue'
import ApiService from "./services/api";
import vuetify from './plugins/vuetify';
import {router} from './router/index'

Vue.config.productionTip = false
const bus = new Vue()
Vue.prototype.$bus = bus

ApiService.init(process.env.VUE_APP_BACKEND);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
