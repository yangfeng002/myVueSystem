/**
 *
 * 功能描述: 相关路由配置信息
 * @author    fy
 * @version  [版本号, 2019/9/20 18:06]
 * 更新信息 [版本，更新功能，作者，更新日期]
 */
export default [
  {
    path:'/login',
    name:'login',
    meta:{
      title:'系统登录',
      requiresAuth:false
    },
    component:()=>{
        import('@/components/login')
    }
  },
  {
    path:'/register',
    name:'register',
    meta:{
      title:'系统注册',
      requiresAuth:false
    },
    component:()=>{
       import('@/components/register')
    }
  },
  {
    path:'/home',
    name:'_home',
    meta:{
      title:'首页',
      requiresAuth:true
    },
    component:()=>{
       import('@/components/main/main')
    },
    children:[
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/components/main/home')
      }
    ]

  }
]

