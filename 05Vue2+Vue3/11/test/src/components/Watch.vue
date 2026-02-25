<template>
  <div>
    {{ count }}
    <button @click="changeCount">点击改变count</button>

    {{ name }}
    <button @click="changeName">点击改变name</button>

  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const count = ref(0)
const name = ref('张三')

const newCount = ref(2)
const newName = ref('李四')

const changeCount = () => {
  count.value = newCount.value
}

const changeName = () => {
  name.value = newName.value
}

watch([count, name], ([newCount, newName], [oldCount, oldName]) => {
  console.log(`count变化了，[${newCount}, ${oldCount}], name变化了，[${newName}, ${oldName}]`)
})

watch(count, (newCount, oldCount) => {
  console.log(`count变化了`)
  console.log(newCount,oldCount);
}, {
  immediate: true
})


</script>

<style lang="scss" scoped>

</style>