import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueGoogleMap from 'vuejs-google-maps'
import { routes } from './router/routes'
import store from './store.js'




Vue.use(VueGoogleMap, {
  load: {
    apiKey: 'your-api-key',
    libraries: ['...']
  }
})
Vue.config.productionTip = false

Vue.use(VueRouter);
const router = new VueRouter({
  routes
})



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

