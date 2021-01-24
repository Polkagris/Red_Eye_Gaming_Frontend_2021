import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentHero: "Kelsier from Mistborn",
    allHeroes: [],
  },
  mutations: {
    setCurrentHero(state, payload) {
      state.currentHero = payload;
      state.allHeroes.push(payload);
    },
  },
  actions: {
    addHero({ commit }, payload) {
      console.log("ADDING THE HERO");
      commit("setCurrentHero", payload);
    },
  },
});

export default store;
