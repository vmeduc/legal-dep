import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import { RootState } from './types';

import { auth } from './auth';
import { legists } from './legists';


Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    isLoading: false,
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
  },
  mutations: {
    setLoading(state, value) {
      return state.isLoading = value;
    },
  },
  actions: {

  },

  modules: {
    auth,
    legists, 
  },
};

export default new Vuex.Store<RootState>(store);