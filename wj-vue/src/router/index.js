import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/indexPage',
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: '/indexPage',
        name: 'IndexPage',
        component: () => import('../views/index/IndexPage.vue')
      },
      {
        path: '/notebook',
        name: 'NoteBook',
        component: () => import('../views/notebook/NoteBook.vue')
      },
      {
        path: '/library',
        name: 'Library',
        component: () => import('../views/library/libraryIndex.vue')
      },
      {
        path: '/person',
        name: 'Person',
        component: () => import('../views/person/Person.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
//路由守卫导航在这最好加上 '/' 表示路径
// localStorage存储的信息是永久有效，sessionStorage存储的信息再关闭当前窗口或页面时也会被清楚
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    //这里使用sessionStorage保证关闭页面下次需要再次登录
    if (window.sessionStorage.getItem('userToken') === null) {
      next('/login')
    } else {
      next()
    }
  }
})

export default router
