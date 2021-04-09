import router from './router'
import { getToken } from '@/utils/auth' // 验权

const whiteList = ['/login'] // 不重定向白名单

router.beforeEach((to, from, next) => {
  // 如果已登录，并且是登录页面跳转到首页
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      // 如果已登录，不是登录页面
      next()
    }
  } else {
    // 如果未登录，当前不是登录页面
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
