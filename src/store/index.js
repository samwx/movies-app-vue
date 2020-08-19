import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { INCLUDE_FAV, GET_MOVIES } from "./actions.types";
import { ADD_FAV, INSERT_MOVIES } from "./mutations.types";
import { getBaseUrl } from "../services/MoviesService";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    favs: [],
    moviesList: [],
  },
  mutations: {
    [ADD_FAV](state, movie) {
      state.favs = state.favs.concat(movie);
    },
    [INSERT_MOVIES](state, movies) {
      state.moviesList = movies;
    },
  },
  actions: {
    [INCLUDE_FAV]({ commit }, movie) {
      commit(ADD_FAV, movie);
    },
    async [GET_MOVIES]({ commit, state }) {
      try {
        if (state.moviesList.length > 0) {
          return;
        }

        const {
          data: { results },
        } = await axios(getBaseUrl("movie/popular"));

        commit(INSERT_MOVIES, results);
      } catch (e) {
        commit(INSERT_MOVIES, []);
      }
    },
  },
});
