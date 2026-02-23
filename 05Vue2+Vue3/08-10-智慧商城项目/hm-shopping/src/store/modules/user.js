import { getInfo, setInfo } from '@/utils/storage'
export default {
  namespaced: true,
  state () {
    return {
      userInfo: getInfo()
    }
  },
  mutations: {
    // 所有mutations方法的第一个参数都是state 第二个才是形参
    setUserInfo (state, obj) {
      state.userInfo = obj
      // console.log(state.userInfo)
      setInfo(obj)
    }
  },
  actions: {}

}
