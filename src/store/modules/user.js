import * as types from "../mutation-types";

const user = {
  state: {
    token: ""
  },
  mutations: {
    [types.SET_TOKEN](state, token) {
      state.token = token;
    }
  }
};

export default user;
