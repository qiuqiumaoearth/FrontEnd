import { getInfo, setInfo } from '@/utils/storage'
export default {
  namespaced: true,
  state () {
    return {
      userInfo: getInfo(),
      platform: 'h5' // 固定为 h5，也可根据场景动态修改
    }
  },
  mutations: {
    // 所有mutations方法的第一个参数都是state 第二个才是形参
    setUserInfo (state, obj) {
      state.userInfo = obj
      // console.log(state.userInfo)
      setInfo(obj)
    },
    setPlatform (state, platform) {
      state.platform = platform
    }
  },
  actions: {}

}
