import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [//一级路由
    {
      path: '/',
      name: 'login',
      component: () => import('../view/login.vue')
    },
    {
      path: '/index.vue',
      name: 'index',
      component: () => import('../view/index.vue'),
      children: [//二级路由
        {
          path: '/one',
          name: 'one',
          component: () => import('@/components/one.vue')
        },
        {
          path: '/two',
          name: 'two',
          component: () => import('@/components/two.vue')
        }
      ]
    }
  ]
})