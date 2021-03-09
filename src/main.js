import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import '../content/css/style.css';
import '../content/css/reset.css';
import '../content/css/responsive.css';
import '../content/images/hotel.jpg';


//fajlli routes importohet te kjo pjese dhe ne at file kemi deklaruar routat e ndryshem se cila route te cila komponent dergon gjate klikut
import { routes } from './router/routes'
Vue.config.productionTip = false

Vue.use(VueRouter);
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')