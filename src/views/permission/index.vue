<template>
  <el-drawer title="项目权限设置" :visible.sync="drawer" direction="rtl">
    <el-select v-model="curProject" placeholder="请选择" size="mini">
      <el-option
        v-for="item in projectList"
        :key="item.value"
        :label="item.name"
        :value="item.value">
      </el-option>
    </el-select>
    <el-tree
      :data="menuTree"
      show-checkbox
      default-expand-all
      node-key="path"
      ref="tree"
      highlight-current
      :props="defaultProps">
    </el-tree>
    <div class="operation">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="confirm">确认</el-button>
    </div>
  </el-drawer>
</template>

<script>
export default {
  data () {
    return {
      curProject: '',
      menuTree: [],
      drawer: false,
      projectList: [
        {
          name: 'Vue项目',
          value: 'vueMenu'
        },
        {
          name: 'React项目',
          value: 'reactMenu'
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {
    // menuTree () {
    //   if (this.curProject) {
    //     return this.$store.getters.menu[this.curProject]
    //   } else {
    //     return []
    //   }
    // }
  },
  watch: {
    curProject: {
      handler (val) {
        debugger
        if (val) {
           // 设置勾选节点的数组
          console.log(this.$store.getters)
          const checkNodes = this.$store.getters.getPermission || {}
          this.menuTree = this.$store.getters.menu ? this.$store.getters.menu[val] : []
          this.$nextTick(() => {
            if (this.$refs.tree) {
              this.$refs.tree.setCheckedNodes(checkNodes[val] || [])
            }
          })
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    show () {
      debugger
      this.drawer = true
      this.$nextTick(() => {
        if (!this.curProject) {
          this.curProject = this.projectList[0].value
        }
      })
    },
    // 初始化
    confirm () {
      debugger
      const checkNode = this.$refs.tree.getCheckedNodes(false, true) || []
      this.$emit('pemission', {vueMenu: checkNode})
      // 存储权限，用于下次进来勾选
      this.$store.commit('setPermission', {vueMenu: checkNode})
      this.close()
    },
    close () {
      this.drawer = false
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
.el-drawer__header {
  margin-bottom: 10px;
}
.el-drawer__body {
  .el-select {
    float: right;
    z-index: 100;
    margin-right: 21px;
  }
  .el-tree {
    margin-top: 50px;
    height: calc(100vh - 200px);
    overflow: auto;
  }
  .operation {
    float: right;
    margin-top: 20px;
  }
}
</style>
