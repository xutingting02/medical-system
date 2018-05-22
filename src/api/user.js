import http from './http'

export const userLogin = (params) => {
  return http.fetchPost('/auth/login', params)
}

export const userRegister = (params) => {
  return http.fetchPost('/auth/register', params)
}

export const getUserList = (params) => {
  return http.fetchGet('/user/list', {params: params})
}

export const addUser = (params) => {
  return http.fetchPost('/user/add', params)
}
