// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.$http = Axios

// 登录权限校验
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('demo-token')
  if (to.path === '/') { // 如果是跳转到登录页的
    if (token !== 'null' && token !== null) {
      next('/user/dashboard') // 如果有token就转向todolist不返回登录页
    }
    next() // 否则跳转回登录页
  } else {
    if (token !== 'null' && token !== null) {
      Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token // 注意Bearer后有个空格
      next() // 如果有token就正常转向
    } else {
      next('/') // 否则跳转回登录页
    }
  }
})

// 所有的请求都会显示loading
Axios.interceptors.request.use(
  function (config) {
    store.dispatch('showLoading')
    return config
  }, function (error) {
    return Promise.reject(error)
  }
)

// 请求结束隐藏loading
Axios.interceptors.response.use(
  function (response) {
    store.dispatch('hideLoading')
    return response
  }, function (error) {
    return Promise.reject(error)
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
