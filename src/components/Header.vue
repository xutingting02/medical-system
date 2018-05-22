<template>
<div class="header">
  <el-menu default-active="/user/dashboard" mode="horizontal" @select="handleSelect" router background-color="#f5f7fa" text-color="#606266">
    <el-menu-item index="/" class="menu-logo">
      <img src="../assets/hospital.png">
      <span>医疗管理系统</span>
    </el-menu-item>
    <el-menu-item index="/user/dashboard">首页</el-menu-item>
    <el-menu-item index="/user/usermanage">用户管理</el-menu-item>
    <el-menu-item index="/user/recordmanage">就诊记录</el-menu-item>
    <el-menu-item index="/user/tool">工具</el-menu-item>
  </el-menu>
</div>
</template>

<style lang="stylus" scoped>
.menu-logo
  width: 300px;
  font-size: 16px;
  text-align: left;
</style>

<script>
export default {
  methods: {
    handleSelect (key, keyPath) {
    }
  }
}
</script>
