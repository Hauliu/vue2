import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//解决 ElmentUI 导航栏中的vue-router在3.0版本以上重复点菜单报错的问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [//一级路由
    {
      path: '/',
      name: 'login',
      component: () => import('@/view/login.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/view/index.vue'),
    },
    {
      path: '/ElementTypeVueDemo',
      name: 'ElementTypeVueDemo',
      component: () => import('@/components/ElementTypeVueDemo.vue')
    }


  ]

})