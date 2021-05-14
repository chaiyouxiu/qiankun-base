// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/login.js'
import '@/mock'
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios

const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:9000',
    container: '#vue',
    activeRule: '/project/vueApp'
  }
]
registerMicroApps(apps)
start()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
