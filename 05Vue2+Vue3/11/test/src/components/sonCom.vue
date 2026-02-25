<template>
  <div class="son">
    子组件:零花钱{{ money }}
    <button @click="useMoney">花钱</button>
    <br/>
    <span style="color: red;">{{ msg }}</span>
  </div>
</template>

<script setup>


const props = defineProps({
  msg: String,
  money: Number,
})


//1.定义事件
const emit = defineEmits(['useMoney'])
//2.使用事件
const useMoney = () => {
  emit('useMoney', 100)
}



</script>

<style scoped>

.son{
  border: 1px solid #000;
  padding: 5px;
}

</style>