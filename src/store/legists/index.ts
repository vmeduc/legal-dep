import axios, { AxiosResponse } from "axios";
import { Module } from "vuex";
import { RootState } from "../types";
import { Legist, LegistsState } from "./types";


export const state: LegistsState = {
  legists: [],

};

export const legists: Module<LegistsState, RootState> = {
  state,
  actions: {
    async getLegists({commit}) {
      commit("setLoading", true);
      try {
        const response: AxiosResponse<Legist> = await axios({
          url: "/users/getlegists",
          method: "GET",
        });
        commit("setLegists", response.data);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  mutations: {
    setLegists(state, legists: Legist[]) {
      state.legists = legists;
    }
  },
  getters: {
    legists(store): Legist[] {
      return store.legists;
    }
  },
};