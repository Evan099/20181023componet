import Vue from 'vue'
import Router from 'vue-router'
// 非组件
// import Footer from '@/components/Footer/Footer'
// 路由组件
import Home from '@/pages/Home/Home'
import Order from '@/pages/Order/Order'
import Find from '@/pages/Find/Find'
import Mine from '@/pages/Mine/Mine'
import Login from '@/pages/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'footer',
    //   component: Footer,
    // },
    {
      path: '/Home',
      name: 'home',
      component: Home,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/Order',
      name: 'order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/Find',
      name: 'find',
      component: Find,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/Mine',
      name: 'mine',
      component: Mine,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    }
  ]
})
