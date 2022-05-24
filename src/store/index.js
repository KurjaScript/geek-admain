import { createStore } from 'vuex'

export default createStore({
  state: {
      count: 666,
      collapse: false,
      tagsList: [],
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
    },
    delTagsItem(state, data) {
      state.tagsList.splice(data.index, 1)
    },
    setTagsItem(state, data) {
      state.tagsList.push(data)
    },
    closeTagsOther(state, data) {
      state.tagsList = data
    },

  },

  actions: {
    asyncAdd({commit}) {
      setTimeout(() => {
        commit('add')
      }, 1000)
    }
  }
})