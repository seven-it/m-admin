import * as types from "../mutation-types";
const app = {
  state: {
    sidebar: {
      isCollapse: false
    }
  },
  mutations: {
    [types.TOGGLE_SIDE_BAR](state) {
      state.sidebar.isCollapse = !state.sidebar.isCollapse;
    }
  }
};

export default app;
