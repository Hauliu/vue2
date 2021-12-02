import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
// 路由
import Vant from 'vant';
import 'vant/lib/index.css';
import VueRouter from 'vue-router';
import router from './router';
import index from './view/index.vue';
import login from './view/login.vue';

Vue.use(VueRouter)
Vue.use(Vant);
Vue.use(ElementUI)
Vue.use(VueRouter)
// ElementUI.Message.error('…………')
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
