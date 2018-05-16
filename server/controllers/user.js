import user from '../models/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const getUserInfo = async function (ctx) {
  const id = ctx.params.id
  const result = await user.getUserById(id)
  ctx.body = result
}

// 登录
const postUserAuth = async function (ctx) {
  const data = ctx.request.body
  const userInfo = await user.getUserByName(data.name)
  if (userInfo != null) {
    if (!bcrypt.compareSync(data.password, userInfo.password)) {
      ctx.body = {
        success: false,
        info: '密码错误！'
      }
    }
    else {
        const userToken = {
            name: userInfo.user_name,
            id: userInfo.id
        }
        const secret = 'vue-koa-demo'
        const token = jwt.sign(userToken, secret)
        ctx.body = {
            success: true,
            token: token
        }
    }
  }
  else {
    ctx.body = {
        success: false,
        info: '用户不存在！'
    }
  }

}

// 注册
const registerUser = async function (ctx) {
  const data = ctx.request.body
  try {
    if (!data.name || !data.password) {
      ctx.status = 400
      ctx.body = {
        success: false,
        message: '用户名密码不能为空'
      }
      return
    }
    data.password = await bcrypt.hash(data.password, 5)
    let userInfo = await user.getUserByName(data.name)
    console.log(userInfo)
    if (!userInfo) {
      await user.addUser(data)
      ctx.status = 200
      ctx.body = {
        success: true,
        message: '注册成功'
      }
    }
    else {
      ctx.status = 406
      ctx.body = {
        success: false,
        message: '用户名已经存在'
      }
    }
  }
  catch (err) {
    ctx.throw(500)
  }
}

export default {
  getUserInfo,
  postUserAuth,
  registerUser
}