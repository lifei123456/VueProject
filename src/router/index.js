import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import course from '@/components/courseTable'
import home from '@/components/home'
import msgBoard from '@/components/msgBoard'
import changePsw from '@/components/changePsw'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/course',
      meta: {
        //meta元素
        requireAuth: true,
      },
      component: course
    },
    {
      path: '/home',
      meta: {
        //meta元素
        requireAuth: true,
      },
      component: home
    },
    {
      path: '/msgBoard',
      meta: {
        //meta元素
        requireAuth: true,
      },
      component: msgBoard
    },
    {
      path: '/changePsw',
      meta: {
        //meta元素
        requireAuth: true,
      },
      component: changePsw
    }

  ]
})
