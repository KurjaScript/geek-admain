import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      count: 666,
      collapse: false,
    }
  },

  getters: {
    double(state) {
      return state.count * 2
    }
  },

  mutations: {
    add (state) {
      state.count++
    },
    handleCollapse(state, data) {
      state.collapse = data
    }
  },

  actions: {
    asyncAdd({commit}) {
      setTimeout(() => {
        commit('add')
      }, 1000)
    }
  }
})