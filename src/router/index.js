import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import Home from '@/components/home'
import axios from 'axios'
/* 使用路由下面的语句不可缺少  Vue.use(Router) */
Vue.use(Router)
/*改写原型链*/
Vue.prototype.$ajax = axios;
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
