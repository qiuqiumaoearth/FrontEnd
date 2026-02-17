import Vue from 'vue'
import App from './App.vue'

import router from './router/index.js'


Vue.config.productionTip = false

//全局注册,多个组件都可以使用
// Vue.directive('focus',{
//   inserted(el){
//     // console.log(el);
//     el.focus()

//   }
// })





new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
