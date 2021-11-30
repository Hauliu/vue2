import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
// 路由
import VueRouter from 'vue-router';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(ElementUI)
Vue.use(VueRouter)
// ElementUI.Message.error('…………')
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
