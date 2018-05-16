<template>
<div>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
    <el-menu-item index="/user/dashboard">首页</el-menu-item>
    <el-menu-item index="/user/list">病历管理</el-menu-item>
    <el-menu-item index="/user/report">统计报告</el-menu-item>
    <el-menu-item index="/user/tool">工具</el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '/user/dashboard'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // this.$router.push('/user/dashboard')
      this.activeIndex = key
    }
  }
}
</script>
