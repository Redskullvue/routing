import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import links from "./components/links"
Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  routes : links
})


new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
