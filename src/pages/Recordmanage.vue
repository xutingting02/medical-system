<template>
<div>
  <Bread :breadList="breadList"></Bread>
  <Recordlist></Recordlist>
</div>
</template>

<style lang="stylus" scoped>
</style>

<script type="text/javascript">
import Bread from '@/components/Bread.vue'
import Recordlist from '@/components/Recordlist'

export default {
  components: {
    Bread,
    Recordlist
  },
  data () {
    return {
      breadList: [
        {
          id: '1',
          path: '/user/recordmanage',
          name: '就诊记录管理'
        },
        {
          id: '2',
          path: '',
          name: '就诊记录列表'
        }
      ]
    }
  },
  methods: {
  }
}
</script>
