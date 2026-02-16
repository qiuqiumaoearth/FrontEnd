import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//封装全局指令,焦点
Vue.directive('focus',{
  inserted(el){
    el.focus()
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
