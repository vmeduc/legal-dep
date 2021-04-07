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
          url: "/api/v1/users/getlegists",
          method: "GET",
        });
        console.log("response - ", response);
      } catch (err) {
        let x = 1;
        x = x - 1;
      } finally {
        commit("setLoading", false);
      }
    },
  },
};