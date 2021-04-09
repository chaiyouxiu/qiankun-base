const getters = {
  roles: state => state.user.roles,
  addRouters: state => state.permission.addRouters,
  menu: state => state.permission.menu,
  permission: state => state.permission.permission
}
export default getters
