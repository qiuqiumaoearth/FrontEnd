<template>
  <div class="app">
    <div class="box" @click="fn">我是盒子</div>
  </div>
</template>


<script>
//import HelloWorld from './components/HelloWorld.vue'

//导出的是当前组件的配置项
//里面可以提供 data(特殊),methods,computed,watch,生命周期八大钩子
export default {
  methods:{
    fn(){
      alert('你好')
    }
  }
}
</script>

<style lang = 'less'>

/* 让style支持less
  1.给style加上lang="less"
  2.安装依赖包 less less-loader
    yarn add less less-loader -D (开发依赖)
 */
.app{
  width: 400px;
  height: 400px;
  background-color: pink;
  .box{
  width: 200px;
  height: 200px;
  background-color: blue;
  color: #fff;
  text-align: center;
}


}
</style>
