<template>
<div>
  <Bread :breadList="breadList"></Bread>
  <Userlist></Userlist>
</div>
</template>

<style lang="stylus" scoped>
</style>

<script type="text/javascript">
import Bread from '@/components/Bread.vue'
import Userlist from '@/components/Userlist'

export default {
  components: {
    Bread,
    Userlist
  },
  data () {
    return {
      breadList: [
        {
          id: '1',
          path: '/user/usermanage',
          name: '用户管理'
        },
        {
          id: '2',
          path: '',
          name: '用户列表'
        }
      ]
    }
  },
  methods: {
  }
}
</script>
