import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css

Vue.use(ElementUI)
// ElementUI.Message.error('…………')
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
