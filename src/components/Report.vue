<template>
<el-container>
  <el-header>
    <Header></Header>
  </el-header>
  <el-main>
    <p>report</p>
  </el-main>
</el-container>
</template>

<script type="text/javascript">
import Header from './Header.vue'

export default {
  components: {
    Header
  },
  data () {
    return {
      activeIndex: '/user/Report'
    }
  }
}
</script>
