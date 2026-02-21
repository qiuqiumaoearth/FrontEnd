const state = {
  uerInfo: {
    name: '张三',
    age: '19'
  }
}

const mutations = {
  setUser (state, newUser) {
    state.uerInfo = newUser
  }
}

const actions = {}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
