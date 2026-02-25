import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import persist from 'pinia-plugin-persistedstate'


// 1. 创建应用实例（只创建一次）
const app = createApp(App)

// 2. 创建 Pinia 实例并注册到应用
const pinia = createPinia()
// app.use(pinia)
app.use(pinia.use(persist)) //pinia插件持久化


// 3. 挂载应用到 DOM 容器（只挂载一次）
app.mount('#app')