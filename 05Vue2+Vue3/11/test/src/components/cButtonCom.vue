<template>
  <div>
    <h3>这是底层组件 -- {{ msg }}-- {{ num }}</h3>
    <button @click="newNum">改变num <input ref="inputRef" type="text" name="" id=""></button>
    
   
  </div>
</template>

<script setup>
  import { inject,ref } from 'vue';
  const msg = inject('msg')
  const num = inject('num')
  const changeNum = inject('changeNum')
  const inputRef = ref(null)

  const newNum = () => {
    changeNum(Number(inputRef.value.value))
  }



</script>

<style lang="scss" scoped>

</style>