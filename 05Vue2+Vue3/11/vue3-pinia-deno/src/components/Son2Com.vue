<template>
  <div>
    我是son2组件 -- {{ counterStore.count }}
    <button @click="counterStore.sub"> - </button>
  </div>
</template>

<script setup>
import { useCounterStore } from '../store/counter.js'

const counterStore = useCounterStore()


</script>

<style lang="scss" scoped>

</style>