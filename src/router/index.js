import {
    createRouter, //用于新建路由实例
    createWebHashHistory, // 用于配置内部使用 hash 模式的路由，也就是 url 上会通过 # 来区分
  } from 'vue-router'
  import Home from '../pages/home.vue'
  import About from '../pages/about.vue'
  
  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router
  