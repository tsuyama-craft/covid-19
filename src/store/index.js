import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    detaildata: [],
    detaildata2: [],
    facilityTableData: [],
  },
  mutations: {
    Enter (state, data) {
        state.detaildata = data;
    },
    Enter2 (state, data) {
      state.detaildata2 = data;
    },
    toStore (state, data) {
      state.facilityTableData = data;
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
})
