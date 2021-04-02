import { createStore } from 'vuex';
import authmutations from './auth/mutations';
import authactions from './auth/actions';
import authgetter from './auth/getters';
import dbactions from './db/actions';

export default createStore({
  state: {
    loginUserState: false,
    profileName: "",
    email: ""
  },
  mutations: {
    ...authmutations
  },
  actions: {
    ...authactions, ...dbactions
  },
  getters: {
    ...authgetter
  },
  modules: {
  }
});
