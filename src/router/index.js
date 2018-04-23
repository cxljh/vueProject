import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home'
import Select from '@/components/select'
import ToTop from '@/components/scroll/toTop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '问答管理',
      component: Home,
      children: [
        { path: '/main', component: HelloWorld, name: '工具1', hidden: true }
      ]
    },
    {
      path: '/select',
      name: '下拉框',
      component: Select
    },
    {
      path: '/toTop',
      name: '返回顶部',
      component: ToTop
    },
    {
      path: '/hello',
      name: '用户管理',
      component: Home,
      children: [
        { path: '/main', component: HelloWorld, name: '工具2', hidden: true }
      ]
    },
    {
      path: '/hello1',
      name: '小工具',
      component: Home,
      children: [
        { path: '/main', component: HelloWorld, name: '工具3', hidden: true }
      ]
    },
    {
      path: '/hello2',
      name: '关于HRSAY',
      component: Home,
      children: [
        { path: '/main', component: HelloWorld, name: '工具4', hidden: true }
      ]
    }
  ]
})
