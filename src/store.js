import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    from: ""
  },
  mutations: {
    from(state, payload) {
      state.from = payload.from
    }
  },
  actions: {
    setFrom(unknowns, payload) {
      store.commit("from",{ from: payload.from })
    }
  },
})

export default store