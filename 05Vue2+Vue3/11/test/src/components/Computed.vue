<template>
  <div>
    原始数据:{{ list }}
    过滤后数据>3:{{ filterList }}
    <button @click="addList" >添加数据<input type="text" name="" id="" v-model="num.count"></button>

  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'

const list = ref([1,2,3,4,5])

const filterList = computed(() => {
  return list.value.filter(item => item > 3)
})

const num = reactive({
  count: 0,
})


const addList = () => {
  list.value.push(+num.count)
}



</script>

<style lang="scss" scoped>

</style>