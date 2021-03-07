import { createStore } from 'vuex';

export default createStore({
  state: {
    loginUserState: false
  },
  mutations: {
    loginMutation(state) {
      console.log('login');
      state.loginUserState = true;
    }
  },
  actions: {
  },
  getters: {
    loggedInState(state) {
      return state.loginUserState;
    }
  },
  modules: {
  }
});
