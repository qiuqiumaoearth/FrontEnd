// 导入 vue
import Vue from 'vue'
// 导入 vuex
import Vuex from 'vuex'
// vuex也是vue的插件, 需要use一下, 进行插件的安装初始化
import setting from './modules/setting.js'
import user from './modules/user.js'

Vue.use(Vuex)

// 创建仓库 store
const store = new Vuex.Store({
  // 开启严格模式
  strict: true,
  state: {
    count: 101,
    title: '仓库大标题',
    list: [1, 2, 3, 4, 5, 6, 7]
  },
  modules: {
    setting,
    user
  },
  mutations: {
    addCount (state, count) {
      state.count += count
    },
    subCount (state, count) {
      state.count -= count
    },
    changeTitle (state, str) {
      state.title = str
    },
    changeCount (state, newCount) {
      state.count = newCount
    }
  },
  // 异步修改数据
  // 1秒后将数据修改成想要的数字
  actions: {
    setAsyncCount (context, num) {
      setTimeout(() => {
        context.commit('changeCount', num)
      }, 1000)
    }
  },
  getters: {
    filterList: state => state.list.filter(item => item > 5)
  }
})

// 导出仓库
export default store
