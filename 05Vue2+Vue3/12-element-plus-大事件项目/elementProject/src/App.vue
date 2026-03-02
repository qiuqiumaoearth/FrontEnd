<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useUserStore, useCounterStore } from '@/stores/index'

//在Vue3 CompositionAPI中
//1.获取路由对象router
//const router useRouter()
//2.获取路由参数route
//const route = useRoute()

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const counterStore = useCounterStore()

const goAbout = () => {
  router.push('/about')
  console.log(router, route)
}
</script>

<template>
  <div>我是App.vue</div>
  <TestDemo />
  <el-button type="primary" @click="$router.push('/home')">跳转首页</el-button>
  <el-button type="warning" @click="goAbout">跳转关于页</el-button>
  {{ userStore.token }}
  <el-button type="success" @click="userStore.setToken('123')"
    >设置token</el-button
  >
  <el-button type="danger" @click="userStore.removeToken">删除token</el-button>
  <br />

  {{ counterStore.count }}
  <el-button type="info" @click="counterStore.add(10)">增加</el-button>
  <el-button type="danger" @click="counterStore.sub(10)">减少</el-button>
</template>

<style scoped>
.el-button {
  margin: 10px;
}
</style>
