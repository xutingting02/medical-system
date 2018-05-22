<template>
<div class="bread-crumb">
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="list in breadList" :to="{ path: list.path }" :key="list.id">{{ list.name }}</el-breadcrumb-item>
  </el-breadcrumb>
</div>
</template>

<style lang="stylus" scoped>
.bread-crumb
  padding: 10px 0 30px 0;
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;
</style>

<script type="text/javascript">
export default {
  props: ['breadList']
}
</script>
