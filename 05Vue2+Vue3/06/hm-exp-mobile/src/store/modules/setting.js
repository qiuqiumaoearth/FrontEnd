const state = {
  theme: 'dark',
  desc: '大年初五迎财神'
}

const mutations = {
  setTheme (state, newTheme) {
    state.theme = newTheme
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
