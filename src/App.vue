<template>
<div id="app">
  <router-view/>
  <Loading :showLoading="showLoading"></Loading>
</div>
</template>

<script>
import Loading from './components/Loading'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Loading
  },
  computed: {
    ...mapGetters([
      'showLoading'
    ])
  }
}
</script>

<style lang="stylus">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
body
  margin: 0;
  padding: 0;
.el-header
  padding: 0;
</style>
