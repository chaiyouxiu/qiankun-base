import Cookies from 'js-cookie'

const permission = {
  state: {
    menu: null,
    permission: {}
  },
  mutations: {
    // 存储所有菜单信息
    setMenu (state, menu) {
      Cookies.set('menu', JSON.stringify(menu))
      state.menu = menu
    },
    // 存储该用户的权限信息
    setPermission (state, permission) {
      state.permission = {
        ...state.permission,
        ...permission
      }
      Cookies.set('permission', JSON.stringify(state.permission))
    }
  },
  actions: {
  },
  getters: {
    getMenu (state) {
      if (!state.menu) {
        const menu = Cookies.get('menu')
        state.menu = JSON.parse(menu)
      }
      return state.menu
    },
    getPermission (state) {
      if (state.permission === '{}') {
        const permission = Cookies.get('permission')
        state.permission = JSON.parse(permission)
      }
      return state.permission
    }
  }
}

export default permission
