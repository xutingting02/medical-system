import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import List from '@/components/List'
import Report from '@/components/Report'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/user/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/user/list',
      name: 'List',
      component: List
    },
    {
      path: '/user/report',
      name: 'Report',
      component: Report
    }
  ]
})
