<template>
  <div>
    <h1>这是顶层组件</h1>
    <bCettetCom />
  </div>
</template>

<script setup>
  import { provide, ref } from 'vue';
  import bCettetCom from './bCettetCom.vue'
  const msg = '这是顶层组件的消息'
  provide('msg', msg)


  const num = ref(100)
  provide('num', num)
  const changeNum = (newnum) => {
    num.value = newnum
  }

  provide('changeNum', changeNum)

</script>

<style lang="scss" scoped>

</style>

