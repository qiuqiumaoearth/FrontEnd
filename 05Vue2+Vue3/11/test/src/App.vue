<script setup>
  import Setup from './components/Setup.vue'
  import Reactive from './components/Reactive.vue'
  import Computed from './components/Computed.vue'
  import Watch from './components/Watch.vue'
  import shengming from './components/shengming.vue'
  import sonCom from './components/sonCom.vue'
  import inpFocus from './components/inpFocus.vue'
  import aTopCom from './components/aTopCom.vue'
  import deModel from './components/deModel.vue'

  import { ref } from 'vue'

  const money = ref(1000)

  const addMoney = () => {
    money.value += 100
  }

  const changeMoney = (num) => {
    money.value -= num
  }

  const txt = ref('123')

</script>

<template>
  <Setup />
  <Reactive />
  <Computed />
  <Watch />
  <shengming />
  <br/>
  <h3>父组件 <button @click="addMoney">板砖</button></h3>
  <sonCom msg="来自父组件的消息" :money="money" @useMoney="changeMoney"/>
  <inpFocus />
  <hr/>
  <aTopCom />
  <hr/>
  <deModel v-model="txt" />
  {{ txt }}
</template>

<style scoped>

</style>
