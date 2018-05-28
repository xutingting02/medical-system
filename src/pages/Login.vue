<template>
<div>
  <el-row>
    <el-col :span="6" :offset="8">
      <img src="../assets/logo.jpeg">
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6" :offset="9">
      <el-row>
          <el-input v-model="account" placeholder="账号" type="text"></el-input>
          <el-input v-model="password" placeholder="密码" type="password"></el-input>
          <el-button type="success" @click="login">登录</el-button>
          <el-button type="success" @click="register">注册</el-button>
      </el-row>
    </el-col>
  </el-row>
</div>
</template>

<script type="text/javascript">
import { userLogin, userRegister } from '@/api/user'

export default {
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    login () {
      let obj = {
        name: this.account,
        password: this.password
      }
      userLogin(obj)
        .then(
          (res) => {
            if (res.success) {
              sessionStorage.setItem('demo-token', res.token)
              this.$message({
                type: 'success',
                message: '登录成功'
              })
              this.$router.push('/user/dashboard')
            } else {
              this.$message.error(res.info)
              sessionStorage.setItem('demo-token', null)
            }
          }, (err) => {
            this.$message.error(err.stack)
            sessionStorage.setItem('demo-token', null)
          }
        )
    },
    register () {
      let obj = {
        name: this.account,
        password: this.password
      }
      userRegister(obj)
        .then(
          (res) => {
            if (res.success) {
              this.$message({
                type: 'success',
                message: '注册成功'
              })
            } else {
              this.$message.error(res.message)
            }
          }, (err) => {
            this.$message.error(err.stack)
          }
        )
    }
  }
}
</script>

<style lang="stylus" scoped>
.el-input
  margin: 12px 0;
.el-button
  width: 100%;
img
  width: 400px;
</style>
