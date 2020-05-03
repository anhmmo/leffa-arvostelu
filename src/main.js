import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueSwal from 'vue-swal';
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store/store';
import vuetify from './plugins/vuetify'


Vue.use(BootstrapVue);
Vue.use(Vuetify);
Vue.use(VueSwal);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
