import { getCartList, updateCart, deleteSelected } from '@/api/cart'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state: {
    cartList: []
  },
  mutations: {
    setCartList (state, cartList) {
      state.cartList = cartList
      // console.log(cartList)
    },
    toggleChecked (state, id) {
      state.cartList.forEach(item => {
        if (item.goods_id === id) {
          item.isChecked = !item.isChecked
        }
      })
    },

    // 全选/取消全选
    toggleAllChecked (state, flag) {
      state.cartList.forEach(item => {
        item.isChecked = flag
      })
    },

    changeCart (state, obj) {
      const { id, goodsNum } = obj
      state.cartList.forEach(item => {
        if (item.goods_id === id) {
          item.goods_num = goodsNum
        }
      })
    }
  },
  actions: {
    async getCartList (context) {
      const { data } = await getCartList()

      // 标记当前商品是否选中
      data.list.forEach(item => {
        item.isChecked = true
      })
      context.commit('setCartList', data.list)
      // context.commit('setCartList', res.data.data)
    },

    // 更新购物车商品数量
    async updateCart (context, obj) {
      const { id, goodsNum, goodsSkuId } = obj
      // 先修改本地
      context.commit('changeCart', { id, goodsNum })

      // 再修改服务器
      await updateCart(id, goodsNum, goodsSkuId)
      // console.log(res)
      // // 刷新购物车列表
      // context.dispatch('getCartList')
    },

    // 删除购物车商品（核心修改）
    async deleteSelected (context) {
      const selCartList = context.getters.selCartList
      const cartIds = selCartList.map(item => item.id)
      await deleteSelected(cartIds)
      Toast('删除成功')

      // 重新拉取最新的购物车数据 (重新渲染)
      context.dispatch('getCartList')
    }
  },

  getters: {
    cartTotal (state) {
      return state.cartList.reduce((pre, cur) => pre + cur.goods_num, 0)
    },
    selCartList (state) {
      return state.cartList.filter(item => item.isChecked)
    },
    selCount (state, getters) {
      return getters.selCartList.reduce((pre, cur) => pre + cur.goods_num, 0)
    },
    selPrice (state, getters) {
      return getters.selCartList.reduce((pre, cur) => pre + cur.goods.goods_price_min * cur.goods_num, 0).toFixed(2)
    },
    isAllChecked (state, getters) {
      return getters.selCartList.length === state.cartList.length
    }
  }
}
