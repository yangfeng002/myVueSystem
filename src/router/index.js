import Vue from 'vue'
import axios from 'axios'
import Router from 'vue-router'
import routes from './routers'
import { setToken, getToken } from '@/libs/util'

/**
 * 路由引入
 * 路由详细的配置在routers.js文件中
 */
Vue.use(Router);
const router = new Router({
  routes,
  mode: 'history'
});
/**
 * 路由问题修复---- this.$router.push({name: 'home'}) 之前这个调用报错
 * @type {(function(*=): (Q.Promise<any> | Promise<T | never> | *))|*}
 */
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
};

/**
 * 如果使用axios,则需要改写原型链
 * @type {AxiosStatic}
 * 调用使用 this.$ajax({})
 */
Vue.prototype.$ajax = axios;


/**
 * 注册全局前置守卫
 */



export default router




