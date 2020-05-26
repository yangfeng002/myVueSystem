import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import 'es6-promise/auto'
import store from './store'


// 实际打包时应该不引入mock
/* eslint-disable */
if (process.env.NODE_ENV !== 'production') require('../server/mock/mock.js');
/**
 * import router from './router' 其实就是：import router from './router/index.js'
 * 在使用webpack项目中，如果导入index.js，则可以省略
 * 这里是相当于导入了一个路由
 *
 * ./表示同一级目录
 * @在webpack配置文件中配置的是src
 * ../ 表示父级目录
 *
 **/
Vue.config.productionTip = false;
Vue.use(ElementUI);


/**
 *
 *  是否启动代码质量检查
 *  eslint-disable 表示不启动eslint代码检查
 *  eslint-disable no-new 表示启动代码检查
 *
 *  el表示挂载在app元素上
 *  router 是 router:router的简写
 *  components:表示局部组件引用，App也是简写，组件名称和配置名称是一致的
 *  render:优先级高于template，template高于el配置的dom，表示渲染App组件的内容
 *
 * */

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
 // template: '<App/>'
  render: h => h(App),
  methods:{

  }
});


