import axios, { AxiosResponse } from "axios";
import { Module } from "vuex";
import { RootState } from "../types";
import { Req, ReqsState } from "./types";


export const state: ReqsState = {
  reqs: [],

};

export const reqs: Module<ReqsState, RootState> = {
  state,
  actions: {
    async getReqs({commit}) {
      commit("setLoading", true);
      try {
        const response: AxiosResponse<Req[]> = await axios({
          url: "/requests/list",
          method: "GET",
        });
        commit("setReqs", response.data);
      } finally {
        commit("setLoading", false);
      }
    },
    async createReq({commit}, req) {
      commit("setLoading", true);
      try {
        const response: AxiosResponse<any> = await axios({
          url: "/requests/create",
          method: "POST",
          data: req,
        });
        if (response.status === 201) {
          alert("Meeting scheduled");
        } else {
          throw "Responsed status not 201";
        }
      } catch (error) {
        alert("Error, meeting not scheduled\n".concat(error));
        throw error;
      } finally {
        commit("setLoading", false);
      }
    },
    async updateReq({commit}, tmp: any) {
      commit("setLoading", true);
      try {
        const response: AxiosResponse<any> = await axios({
          url: `/requests/update/${tmp.id}`,
          method: "PUT",
          data: tmp.req,
        });
        if (response.status === 200) {
          this.dispatch('getReqs');
          alert("Data updated");
          return response;
        } else {
          throw "Responsed status not 200";
        }
      } catch (error) {
        alert("Error, data not updated\n".concat(error));
        throw error;
      } finally {
        commit("setLoading", false);
      }
    },
    
  },
  mutations: {
    setReqs(state, reqs: Req[]) {
      state.reqs = reqs;
    }
  },
  getters: {
    reqs(store): Req[] {
      return store.reqs;
    }
  },
};