<script setup>
import Son1Com from './components/Son1Com.vue'
import Son2Com from './components/Son2Com.vue'
import { useCounterStore } from './store/counter.js'
import { useChannelStore } from './store/channel.js'


const counterStore = useCounterStore()
console.log(counterStore);

const channelStore = useChannelStore()


</script>

<template>
  <div><h3>App.vue根组件 
    -- {{ counterStore.count }}
    -- {{ counterStore.msg }}
  </h3></div>
  <Son1Com />
  <Son2Com />
  {{ counterStore.double }}
  <button @click="channelStore.getList">获取频道数据</button>
  <ol v-if="channelStore.channelList.length > 0">
    <li v-for="item in channelStore.channelList">{{ item.name }}</li>
  </ol>
</template>

<style scoped>

</style>
