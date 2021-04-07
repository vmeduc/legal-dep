import { Module } from 'vuex';
import { AuthRequest, AuthResponse, AuthState } from './types';
import { RootState } from '../types';
import axios, { AxiosResponse } from 'axios';
// import { actions } from './actions';
// import { mutations } from './mutations';
// import { getters } from './getters';

export const state: AuthState = {
  token: localStorage.getItem("token"),
  status: localStorage.getItem("token") ? "success" : undefined,
};

export const auth: Module<AuthState, RootState> = {
  state,
  actions: {
    async login({commit}, user: AuthRequest) {
      commit('setLoading', true);
      try {
        const response: AxiosResponse<AuthResponse> = await axios({
          url: "api/v1/auth/login", 
          data: user, 
          method: "POST",
        });
        console.log(response);
        commit("authSuccess", response.data.token);
        alert("Auth success!")
        return response;
      } catch (error) {
        commit("authError");
        alert("Auth error!\n".concat(error.message));
        return error;
      } finally {
        commit('setLoading', false);
      }
    },
    async logout({commit}) {
      commit('setLoading', true);
      try {
        // const response: AxiosResponse = await axios({
        //   url: "api/v1/auth/logout", 
        //   method: "POST",
        // });
        commit("authLogout");
        alert("Logout succes!");
      } catch (error) {
        alert("Logout error!\n".concat(error));
        commit("authLogoutError");
      } finally {
        commit('setLoading', false);
      }
    },
  },
  mutations: {
    authSuccess(state, token: string) {
      state.status = "success";
      state.token = token;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = token;
    },
    authError(state) {
      state.status = "error";
      localStorage.removeItem("token");
    },
    authLogout(state) {
      state.token = null;
      state.status = undefined;
      localStorage.removeItem("token");
    },
    authLogoutError(state) {
      state.token = null;
      state.status = undefined;
      localStorage.removeItem("token");
    }
  },
  getters: {
    isAuthenticated(store) {
      console.log("in isAuthenticated - ");
      console.log("store.status - ", store.status);
      console.log("store.token - ", store.token);

      return (store.status === "success" && store.token) ? true : false;
    },
  }
};