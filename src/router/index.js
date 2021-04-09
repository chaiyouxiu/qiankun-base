import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Login from '@/Login.vue'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'Layout',
    component: Layout
  },
  {
    path: '/project/*',
    component: Layout
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

export default new Router({
  mode: 'history',
  routes: constantRouterMap
})
