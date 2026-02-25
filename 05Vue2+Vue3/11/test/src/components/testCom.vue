<template>
  <div>
    这是测试组件
  </div>
</template>

<script setup>
  defineExpose({
    msg,
    num
  })
  const msg = 'hello testCom'
  const num = 100
</script>

<style lang="scss" scoped>

</style>