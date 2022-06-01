import {
    createRouter, //用于新建路由实例
    createWebHashHistory,
    useRoute, // 用于配置内部使用 hash 模式的路由，也就是 url 上会通过 # 来区分
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
        component: () => import ("../views/Basetable.vue")
      }, {
        path: "/tabs",
        name: "tabs",
        meta: {
          title: 'tab标签'
        },
        component: () => import ("../views/Tabs.vue")
      }, {
        path: "/user",
        name: "user",
        meta: {
          title: '个人中心'
        },
        component: () => import("../views/User.vue")
      }, {
        path: "/form",
        name: "form",
        meta: {
          title: '基本表单'
        },
        component: () => import("../views/Baseform.vue")
      }, {
        path: "/upload",
        name: "upload",
        meta: {
          title: '文件上传'
        },
        component: () => import("../views/Upload.vue")
      }, {
        path: "/editor",
        name: "editor",
        meta: {
          title: '富文本编辑器'
        },
        component: () => import("../views/Editor.vue")
      }, {
        path: "/icon",
        name: "icon",
        meta: {
          title: '自定义图标'
        },
        component: () => import("../views/Icon.vue")
      }, {
        path: "/charts",
        name: "charts",
        meta: {
          title: '图表'
        },
        component: () => import("../views/Basecharts.vue")
      }, {
        path: "/i18n",
        name: "ℹi8n",
        meta: {
          title: '国际化'
        },
        component: () => import("../views/I18n.vue")
      }, {
        path: "/permission",
        name: "permission",
        meta: {
          title: '权限测试'
        },
        component: () => import("../views/Permission.vue")
      }, {
        path: "/403",
        name: "403",
        meta: {
          title: '没有权限'
        },
        component: () => import("../views/403.vue")
      }, {
        path: "/404",
        name: "404",
        meta: {
          title: '找不到页面'
        },
        component: () => import("../views/404.vue")
      }, {
        path: "/donate",
        name: "donate",
        meta: {
          title: '捐助作者'
        },
        component: () => import("../views/Donate.vue")
      }
    ]
  }, {
    path: "/login",
    name: "login",
    meta: {
      title: "登录"
    },
    component: () => import("../pages/Login.vue")
  }, {
    path: '/about',
    name: 'About',
    component: () => import ("../pages/about.vue")
  }, {
    path: '/manuscript',
    name: 'Manuscript',
    component: () => import ("../pages/manuscript.vue")
  },{
    path: '/sample1',
    name: 'Sample1',
    component: () => import("../pages/sample1.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
