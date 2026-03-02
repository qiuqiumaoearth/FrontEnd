import { defineStore } from 'pinia'
import { ref } from 'vue'

//用户模块
export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(100)
    const add = (n) => {
      count.value += n
    }
    const sub = (n) => {
      count.value -= n
    }
    return {
      count,
      add,
      sub
    }
  },
  {
    persist: true
  }
)
