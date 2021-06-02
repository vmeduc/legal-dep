import { Module } from 'vuex';
import { AuthRequest, AuthResponse, AuthState } from './types';
import { RootState } from '../types';
import axios, { AxiosResponse } from 'axios';
// import { actions } from './actions';
// import { mutations } from './mutations';
// import { getters } from './getters';

import { User } from './types';

export const state: AuthState = {
  token: localStorage.getItem("token"),
  status: localStorage.getItem("token") ? "success" : undefined,
  user: undefined,
};

export const auth: Module<AuthState, RootState> = {
  state,
  actions: {
    preAuth({commit}) {
      const token = localStorage.getItem("token");
      const userName = localStorage.getItem("userName");
      const role = localStorage.getItem("role");
      if (token && userName) {
        const obj: AuthResponse = {role: role ?? 'USER', token: token, username: userName};
        commit("authSuccess", obj);
      }
    },
    async registration({commit}, user) {
      commit('setLoading', true);
      try {
        const response = await axios({
          url: "/auth/register",
          data: user,
          method: "POST",
        });
        console.log('resp - ', response);
        return response;
      } catch (err) {
        
        alert("Registration error");
      } finally {
        commit('setLoading', false);
      }
    },
    async login({commit}, user: AuthRequest) {
      commit('setLoading', true);
      try {
        const response: AxiosResponse<AuthResponse> = await axios({
          url: "/auth/login", 
          data: user, 
          method: "POST",
        });
        commit("authSuccess", response.data);
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
        //   url: "/auth/logout", 
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
    async getUser({commit}, name: string) {
      // const user: User = store.getters.user;
      commit('setLoading', true);
      try {
        const response: AxiosResponse<User> = await axios({
          url: `/users/getUser/byUsername/${name}`, 
          method: "GET",
        });
        return response;
      } finally {
        commit('setLoading', false);
      }
    },
  },
  mutations: {
    authSuccess(state, respData: AuthResponse) {
      state.status = "success";
      state.token = respData.token;
      state.user = new User(respData.username, respData.role);
      localStorage.setItem("token", respData.token);
      localStorage.setItem("userName", respData.username);
      localStorage.setItem("role", respData.role);
      axios.defaults.headers.common["Authorization"] = `Bearer ${respData.token}`;
    },
    authError(state) {
      state.status = "error";
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      localStorage.removeItem("role");

    },
    authLogout(state) {
      state.token = null;
      state.status = undefined;
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      localStorage.removeItem("role");
    },
    authLogoutError(state) {
      state.token = null;
      state.status = undefined;
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      localStorage.removeItem("role");
    },
    setUser(state, user: User) {
      state.user = user;
    },
  },
  getters: {
    isAuthenticated(store) {
      // console.log('status - ', store.status);
      // console.log('token - ', store.token);
      // console.log('user - ', store.user);
      let status;
      let token;
      let user;
      if (store.status === "success" || localStorage.getItem("status") === "success") {
        status = true;
      }
      if (Boolean(store.token) || Boolean(localStorage.getItem("token"))) {
        token = true;
      }
      if (Boolean(store.user) || Boolean(localStorage.getItem("userName"))) {
        user = true;
      }
      console.log('in isAuth: ', status, token, user);
      return (status && token && user);
    },
    role(store) {
      const storageRole: string|null = localStorage.getItem('role');
      return store.user ? store.user.roles.pop() : 
        storageRole ? storageRole : 'USER';
    },
    user(store) {
      return store.user;
    }
  }
};