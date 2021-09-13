import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSimpleAlert from 'vue-simple-alert'
import VueSessionStorage from 'vue-sessionstorage'
Vue.config.productionTip = false
Vue.use(VueSimpleAlert)
Vue.use(VueSessionStorage)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
