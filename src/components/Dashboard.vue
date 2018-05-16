<template>
<el-container>
  <el-header>
    <Header></Header>
  </el-header>
  <el-main>
    <p>dashboard</p>
  </el-main>
</el-container>
</template>

<script>
import Header from './Header.vue'
import Report from './Report.vue'
export default {
  components: {
    Header,
    Report
  },
  data () {
    return {
      activeIndex: '/user/dashboard'
    }
  }
}
</script>
