import Vue from 'vue'
import Router from 'vue-router'

import Login from '../pages/Login'
import Dashboard from '@/pages/Dashboard'
import User from '@/pages/User'
import Usermanage from '@/pages/Usermanage'
import Adduser from '@/pages/Adduser'
import Recordmanage from '@/pages/Recordmanage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/user',
      component: User,
      children: [
        {
          path: '',
          component: Dashboard
        },
        {
          path: 'dashboard',
          component: Dashboard
        },
        {
          path: 'usermanage',
          component: Usermanage
        },
        {
          path: 'recordmanage',
          component: Recordmanage
        },
        {
          path: 'adduser',
          component: Adduser
        }
      ]
    }
  ]
})
