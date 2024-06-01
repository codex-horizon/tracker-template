"use strict";
import { createStore } from "vuex";

const store = createStore({
  strict: true,
  namespaced: true,
  state() {
    return {
      menus: []
    };
  },
  getters: {
    getMenus(state) {
      return state.menus;
    }
  },
  mutations: {
    setMenus(state, menus) {
      state.menus = menus;
    }
  },
  actions: {
    asyncSetMenus(context, menus) {
      context.commit("setMenus", menus);
    }
  },
  modules: {}
});

export default store;
