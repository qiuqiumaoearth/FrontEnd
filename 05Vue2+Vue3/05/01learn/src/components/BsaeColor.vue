<template>
  <div>
    <h1 v-color="color1">指令的值1测试</h1>
    <h1 v-color="color2">指令的值2测试</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      color1:'red',
      color2:'green',
    }
  },
  directives:{
    color:{
      //1. inserted 钩子(周期的某个时间)提供的是元素被添加到页面中时的逻辑
      inserted(el,binding){
        //获取当前标签,和binding.value就是指令的值
        // console.log(el,binding.value);
        el.style.color = binding.value
      },
      //2.update指令的值修改的时候触发,提供值变化后,dom更新的逻辑
      update(el,binding){
        // console.log('指令修改了');
        el.style.color=binding.value
      }
    }
  }
}
</script>

<style>

</style>