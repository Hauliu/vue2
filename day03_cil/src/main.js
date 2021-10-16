import Vue from 'vue'
// import App from './App.vue'
import App from './App.vue'
//自定义全局组件
import Count from '@/components/Count.vue'
// MyCount === 全局组件名称， Count === import count from "……" 中的 count
Vue.component('MyCount', Count)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
