<template>
  <div>

  </div>
</template>

<script setup>
  import { onMounted } from 'vue'
  const getList = () => {
    setTimeout(()=>{
      console.log('获取列表');
    },1000)
    
  }

  // 一进页面就获取,类似created
  getList()

  //在mounted生命周期中执行
  onMounted(()=>{
    console.log('mounted生命周期函数,-逻辑1');
  })

  //写成函数的调用方式,可以多次调用,不冲突,按照顺序执行
  onMounted(()=>{
    console.log('mounted生命周期函数,-逻辑2');
  })

</script>

<style lang="scss" scoped>

</style>