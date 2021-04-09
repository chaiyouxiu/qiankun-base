<template>
  <div class="layout">
    <div class="header">
      <span class="title">
        微前端Qiankun
        <span class="border-right"></span>
      </span>
      <span class="independent-project">
        <span v-for="item in projectList" :key="item.value" @click="changeProject(item)">{{item.name}}</span>
      </span>
      <a @click="showPermissionDrawer" style="color: #409eff; text-decoration: underline;">
        设置权限
      </a>
      <a @click="signOut" style="color: #409eff; text-decoration: underline; float: right; line-height: 60px">退出登录</a>
    </div>
    <div v-show="!$route.name" id="vue" ref="vue"></div>
    <div v-show="!$route.name" id="react"></div>
    <Permission ref="permission" @pemission="refreshPermission"></Permission>
  </div>
</template>

<script>
import {start} from 'qiankun'
import { removeToken } from '@/utils/auth.js'
import actions from '@/shared/action'
import Permission from '@/views/permission'

export default {
  name: 'HelloWorld',
  data () {
    return {
      projectList: []
    }
  },
  components: {
    Permission
  },
  computed: {
    permission () {
      return this.$store.getters.getMenu
    }
  },
  watch: {
    projectList: {
      handler (val) {
        if (val.length) {
          this.changeProject(val[0])
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    // 退出登录
    signOut () {
      removeToken()
      this.$store.commit('setMenu', {})
      this.$router.push({
        path: '/login'
      })
    },
    // 获取子应用列表
    getProjectList () {
      const projectList = [
        {
          name: 'Vue项目',
          path: '#vue',
          value: '/project/vueApp'
        },
        {
          name: 'React项目',
          path: '#react',
          value: '/react'
        }
      ]
      this.projectList = projectList
    },
    // 切换子应用
    changeProject (item) {
      this.$router.push({
        path: item.value
      })
    },
    // 设置权限
    refreshPermission (permission) {
      actions.setGlobalState(permission)
    },
    // 显示设置权限抽屉
    showPermissionDrawer () {
      this.$refs.permission.show()
    }
  },
  mounted () {
    this.getProjectList()
    // 启动微服务
    if (!window.qiankunStarted) {
      window.qiankunStarted = true
      start()
    }
    // 第一次设置权限
    const permission = this.$store.getters.getMenu
    this.refreshPermission(permission)
  }
}
</script>

<style scoped lang="scss">
.layout {
  .header {
    width: 100%;
    background: #304156;
    height: 60px;
    .title {
      text-align: center;
      line-height: 60px;
      display: inline-block;
      width: 180px;
      color: #fff;
      font-weight: 700;
      position: relative;
      .border-right {
        width: 1px;
        height: 40px;
        background: #fff;
        display: inline-block;
        position: absolute;
        right: 0;
        top: 10px;
      }
    }
    .independent-project {
      color: #fff;
      span {
        display: inline-block;
        margin-left: 8px;
        cursor: pointer;
      }
    }
  }
}
</style>
