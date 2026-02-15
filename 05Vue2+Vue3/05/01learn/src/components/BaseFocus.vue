<template>
  <div>
    <h1>自定义指令</h1>

    <!-- 全局注册指令 v-focus-->
    <input v-focus type="text" ref="inp">
  </div>
</template>

<script>
export default {
  // mounted(){
  //   //获取焦点
  //   this.$refs.inp.focus()
  // }

  //局部注册指令,一个组件中使用
  directives:{
    focus:{
      inserted(el){
        el.focus()
      }
    }
  }

}
</script>

<style>

</style>