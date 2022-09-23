import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import routerConfig from './router/router.config'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter(routerConfig)

new Vue({
  el:"#app",
  router:router,
  render: h => h(App),
}).$mount('#app')
