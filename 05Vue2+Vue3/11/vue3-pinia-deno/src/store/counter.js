import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// 1. 定义 Store
export const useCounterStore = defineStore('counter', () => {
  const count = ref(99)
  const add = () => {
    count.value++
  }
  const sub = () => {
    count.value--
  }

  // 3. 计算属性getters(computed)
  const double = computed(() => {
    return count.value * 2
  })

  const msg = ref('hello counter')

  return {
    count,
    msg,
    add,
    sub,
    double
  }
}, {
  // persist: true //开启数据持久化 
  persist: {
    key: 'counter',//指定存储的key,默认是pinia
    storage: localStorage, //指定存储方式,默认是localStorage
    paths: ['count'] //指定需要持久化的状态属性
  }
})
