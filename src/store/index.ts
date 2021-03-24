import { createStore } from "vuex";
// import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // Declare your own store states.
  interface State {
    collapse: boolean;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

export default createStore({
  state: {
    collapse: true,
  },
  mutations: {
    SET_collapse(state, collapse: boolean) {
      state.collapse = collapse;
    },
  },
  actions: {},
  modules: {},
});
