<template>
  <div>
    <el-card class="login-form-layout">
      <el-form autoComplete="on"
               :model="loginForm"
               ref="loginForm"
               label-position="left">
        <div style="text-align: center">
          <!-- <svg-icon icon-class="login-mall" style="width: 56px;height: 56px;color: #409EFF"></svg-icon> -->
        </div>
        <h2 class="login-title color-main">微前端Qiankun</h2>
        <el-form-item prop="username">
          <el-input name="username"
                    type="text"
                    v-model="loginForm.username"
                    autoComplete="on"
                    placeholder="请输入用户名">
          <span slot="prefix">
          </span>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input name="password"
                    :type="pwdType"
                    @keyup.enter.native="handleLogin"
                    v-model="loginForm.password"
                    autoComplete="on"
                    placeholder="请输入密码">
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px;text-align: center">
          <el-button style="width: 45%" type="primary" :loading="loading" @click.native.prevent="handleLogin">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import {setToken} from '@/utils/auth.js'
import {setCookie} from '@/utils/support'
import {login} from '@/api/login'
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loading: false,
      pwdType: 'password',
      dialogVisible: false
    }
  },
  methods: {
    /**
     * 1.登录存储user信息
     * 2.根据用户存储各种权限信息
     */
    handleLogin () {
      debugger
      // 登录 存储主应用cookie，通知子应用存储cookie
      // 条件有限.请求子应用的接口
      const {username, password} = this.loginForm
      login(username, password).then(response => {
        const data = response.data
        const tokenStr = data.tokenHead + data.token
        setToken(tokenStr)
        setCookie('username', this.loginForm.username, 15)
        setCookie('password', this.loginForm.password, 15)
        // this.$store.commit('SET_TOKEN', tokenStr)

        // 请求mock的api，返回权限信息
        this.$axios.get('http://login')
          .then(res => {
            const menu = res.data.menu
            // 存储所有权限，设置权限用途
            this.$store.commit('setMenu', menu)
            this.$store.commit('setPermission', menu)
            // 存储该用户对应的权限，设置权限用途
            // 由于没有后台配合，目前默认[],前端使用VUEX实现
            // 跳转首页
            this.$router.push({path: '/'})
          })
      })
    }
  }
}
</script>

<style scoped>
  .login-form-layout {
    position: absolute;
    left: 0;
    right: 0;
    width: 360px;
    margin: 140px auto;
    border-top: 10px solid #409EFF;
  }

  .login-title {
    text-align: center;
  }

  .login-center-layout {
    background: #409EFF;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin-top: 200px;
  }
</style>
