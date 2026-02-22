import axios from 'axios'

export default {
  namespaced: true,
  state () {
    return {
      // 购物车数据
      list: []
    }
  },
  mutations: {
    updataList (state, newList) {
      state.list = newList
    },
    updateCount (state, obj) {
      // console.log(id)
      const goods = state.list.find(item => item.id === obj.id)
      goods.count = obj.count
    }

  },
  actions: {
    async getList (context) {
      const res = await axios.get('http://localhost:3000/cart')
      // console.log(res)
      context.commit('updataList', res.data)
    },
    async updataCountAsync (context, obj) {
      // console.log(id, count)
      // 同步到后台
      const res = await axios.patch(`http://localhost:3000/cart/${obj.id}`, {
        count: obj.count
      })
      // console.log(res)
      context.commit('updateCount', res.data)
    }
  },
  getters: {
    totalSum: state => state.list.reduce((a, item) => a + item.count, 0),
    totalPrice: state => state.list.reduce((a, item) => a + item.count * item.price, 0).toFixed(2)
  }

}
