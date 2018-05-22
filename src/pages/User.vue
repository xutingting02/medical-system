<template>
<el-container>
  <el-header>
    <Header></Header>
  </el-header>
  <el-main>
    <router-view />
  </el-main>
  <el-footer>
    <Footer></Footer>
  </el-footer>
</el-container>
</template>

<script type="text/javascript">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
