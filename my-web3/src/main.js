import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
