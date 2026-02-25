import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useChannelStore = defineStore('channel', () => {

  // 1. 定义状态state
  const channelList = ref([])

  //声明操作数据的方法
  const getList = async () => {

    //支持异步操作
    const {data:{data}} = await axios.get('http://geek.itheima.net/v1_0/channels')
    channelList.value = data.channels
    console.log(data.channels);
  }

  return {
    channelList,
    getList
  }
})