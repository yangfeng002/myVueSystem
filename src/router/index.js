import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import axios from 'axios'
import login from '@/components/login'
import home from '@/components/main/home'
import register from '@/components/register'

/* 使用路由下面的语句不可缺少  Vue.use(Router) */
Vue.use(Router)
/*如果使用axios,则需要改写原型链*/
Vue.prototype.$ajax = axios;

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path:'/register',
      name:'register',
      component:register
    }
  ]
})
