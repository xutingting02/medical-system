<template>
  <div class="loading-mask" v-show="showLoading">
    <div class="vue-loading" v-html="svg" :style="loadingStyle"></div>
  </div>
</template>

<script>
import loading from '../assets/loading.svg'
export default {
  props: {
    color: {
      type: String,
      default: '#5ac1dd'
    },
    size: {
      default: () => ({ width: '60px', height: '60px' })
    },
    showLoading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    svg () {
      return loading
    },
    loadingStyle () {
      return { fill: this.color, width: this.size.width, height: this.size.height }
    }
  }
}
</script>

<style lang="stylus" scoped>
.loading-mask
  background-color: hsla(0,0%,100%,.9);
  margin: 0 auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity .3s;
  position: fixed;
  z-index: 2001;
  opacity: 0.5;
.vue-loading
  top: 50%;
  left: 50%;
  width: 100%;
  text-align: center;
  position: absolute;
</style>
