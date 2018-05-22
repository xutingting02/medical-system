
const state = {
  showLoading: false
}

const mutations = {
  showLoading (state) {
    state.showLoading = true
  },
  hideLoading (state) {
    state.showLoading = false
  }
}

const getters = {
  showLoading (state) {
    return state.showLoading
  }
}

const actions = {
  showLoading: ({ commit }) => {
    commit('showLoading')
  },
  hideLoading: ({ commit }) => {
    commit('hideLoading')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
