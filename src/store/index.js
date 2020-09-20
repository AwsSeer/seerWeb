import Vue from 'vue'
import Vuex from 'vuex'
import home from './Home'
import people from './People'
import tracking from './Tracking'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loaded: false,
    error: false,
  },
  mutations: {
    pageLoaded(state, { startPolling, error }) {
      state.loaded = !error || startPolling || state.loaded;
      state.error = error;
    },
  },
  actions: {
  },
  modules: {
    home,
    tracking,
    people,
  }
})
