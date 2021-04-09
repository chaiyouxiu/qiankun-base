<template>
  <div id="app">
    <!-- <Layout/> -->
    <router-view/>
  </div>
</template>

<script>

// import Layout from './components/Layout'
export default {
  name: 'App',
  data () {
    return {
      projectList: []
    }
  },
  components: {
    // Layout
  },
  methods: {
    getProjectList () {
      const projectList = [
        {
          name: 'Vue项目',
          path: '#vue',
          value: 'vue'
        },
        {
          name: 'React项目',
          path: '#react',
          value: 'react'
        }
      ]
      this.projectList = projectList
    },
    changeProject (item) {
      this.$router.push({
        path: `/${item.value}`
      })
    }
  },
  mounted () {
    this.getProjectList()
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
