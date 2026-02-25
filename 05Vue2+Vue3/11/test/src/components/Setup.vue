<script setup>
  const message = '这是vue3'
  const logMessage = () => {
    console.log(message)
  }

</script>

<template>
  {{ message }}
  <button @click="logMessage">点击打印</button>
</template>

<style scoped>

</style>
