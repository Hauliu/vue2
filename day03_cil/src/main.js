import Vue from 'vue'
// import App from './App.vue'
import Test from './test.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Test),
}).$mount('#app')
