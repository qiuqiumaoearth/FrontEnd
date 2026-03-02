import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
// import { useUserStore } from './modules/user'
// import { useCounterStore } from './modules/counter'

const pinia = createPinia()
pinia.use(persist)

export default pinia
// export { useUserStore, useCounterStore }
// 可以优化成
// 导出user模块的所有内容
export * from './modules/user'

// 导出counter模块的所有内容
export * from './modules/counter'
