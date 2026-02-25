<template>
  <div>
    <input type="text" ref="inputRef" />
    <button @click="search">搜索</button>
    <testCom ref="testComRef" />
    <button @click="getTestComMsg">获取testCom消息</button>

  </div>
</template>

<script setup>

import { ref, onMounted, useTemplateRef } from 'vue'
import testCom from './testCom.vue'

const inputRef = useTemplateRef('inputRef')

// 挂载完成后，自动聚焦到输入框
onMounted(() => {
  inputRef.value.focus()
})

//点击搜索也聚焦
const search = () => {
  inputRef.value.focus()
}

//获取组件

const testComRef = useTemplateRef('testComRef')
// 点击搜索按钮，获取组件中的消息
const getTestComMsg = () => {
  console.log(testComRef.value.msg)
  console.log(testComRef.value.num)
}



</script>

<style lang="scss" scoped>

</style>