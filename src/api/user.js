import http from './http'

// 登录
export const userLogin = (params) => {
  return http.fetchPost('/auth/login', params)
}

// 注册
export const userRegister = (params) => {
  return http.fetchPost('/auth/register', params)
}

// 获取用户
export const getUserList = (params) => {
  return http.fetchGet('/user/list', {params: params})
}

// 新建用户
export const addUser = (params) => {
  return http.fetchPost('/user/add', params)
}

// 删除用户
export const deleteUser = (params) => {
  return http.fetchPost('/user/delete', params)
}
