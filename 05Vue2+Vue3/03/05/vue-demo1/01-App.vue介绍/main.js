//此文件核心作用:导入APP。vue，基于App.vue创建结构渲染index

//1.导入vue核心包
import Vue from 'vue'

//2.导入APP.vue根组件
import App from './App.vue'

//提示,当前处于什么环境(生产环境pro/开发环境dev)
Vue.config.productionTip = true


//3.vue实例化,提供render方法 => 基于App.vue创建结构渲染index.html
new Vue({
  //render: h => h(App), //基于App创建元素结构
  //完整写法
  render:(createElement) =>{
    return createElement(App)
  }

  //el:'#app',作用:和 $mount('选择器')作用一致,用于指定Vue所管理的容器
}).$mount('#app')

