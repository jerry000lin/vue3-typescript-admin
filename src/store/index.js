import { createStore } from "vuex";

export default createStore({
  state: {
    collapse: true,
  },
  mutations: {
    SET_collapse(state, collapse) {
      state.collapse = collapse;
    },
  },
  actions: {},
  modules: {},
});
