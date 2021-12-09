import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
// 路由
import Vant from 'vant';
import 'vant/lib/index.css';
import VueRouter from 'vue-router';
import router from './router';

import 'vx-easyui/dist/themes/default/easyui.css';
import 'vx-easyui/dist/themes/icon.css';
import 'vx-easyui/dist/themes/vue.css';
import EasyUI from 'vx-easyui';
Vue.use(EasyUI);
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
