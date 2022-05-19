import {
    createRouter, //用于新建路由实例
    createWebHashHistory, // 用于配置内部使用 hash 模式的路由，也就是 url 上会通过 # 来区分
  } from 'vue-router';
import Home from '../pages/home.vue';
  
const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  }, {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        meta: {
          title: '系统首页'
        },
        component: () => import ("../views/Dashboard.vue")
      }, {
        path: "/table",
        name: "basetable",
        meta: {
          title: '表格'
        },
        component: () => import ("../views/Dashboard.vue")
      }
    ]
  }, {
    path: '/about',
    name: 'About',
    component: () => import ("../pages/about.vue")
  }, {
    path: '/manuscript',
    name: 'Manuscript',
    component: () => import ("../pages/manuscript.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
