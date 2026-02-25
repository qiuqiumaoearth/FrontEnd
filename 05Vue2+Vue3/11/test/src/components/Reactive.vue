<template>
  <div>
    {{ state.count }}
    <button @click="addCount">点击增加</button>

    {{ stateCount }}
    <button @click="subCount">点击减少</button>

  </div>
</template>

<script setup>
import {reactive,ref} from 'vue'

const state = reactive({
  count: 0,
})

const stateCount = ref(99)

const subCount = () => {
  //ref需要通过.value来访问和修改
  stateCount.value--
}

const addCount = () => {
  state.count++
}                                      

</script>                 

<style lang="scss" scoped>

</style>