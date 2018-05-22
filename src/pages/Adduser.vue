<template>
<div>
  <Bread :breadList="breadList"></Bread>
  <el-row class="row-group">
    <el-col :span="8">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名:">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别:">
          <el-radio-group v-model="form.sex">
            <el-radio label="1">男</el-radio>
            <el-radio label="2">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄:">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="家庭地址:">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="联系方式:">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</div>
</template>

<style lang="stylus" scoped>
.el-col
  text-align: left;
  margin: 10px 0;
.bread-crumb
  margin-bottom: 20px;
</style>

<script type="text/javascript">
import Bread from '@/components/Bread'
import { addUser } from '@/api/user'
export default {
  components: {
    Bread
  },
  data () {
    return {
      form: {
        name: '',
        sex: '1',
        age: '',
        address: '',
        phone: ''
      },
      breadList: [
        {
          id: '1',
          path: '/user/usermanage',
          name: '病历管理'
        },
        {
          id: '2',
          path: '',
          name: '新建病历'
        }
      ]
    }
  },
  methods: {
    onSubmit () {
      addUser(this.form).then((res) => {
        this.$message({
          type: 'success',
          message: '新建成功'
        })
        this.$router.push('/user/usermanage')
      })
    }
  }
}
</script>
