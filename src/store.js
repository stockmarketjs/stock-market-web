import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function loadFromLocalStorage(key) {
  return JSON.parse(window.localStorage.getItem(key));
}

function saveFromLocalStorage(key, value) {
  return window.localStorage.setItem(key, JSON.stringify(value));
}

export default new Vuex.Store({
  state: {
    token: loadFromLocalStorage('token') || '',
    userId: null,
  },
  mutations: {
    setUserId(state, value) {
      state.userId = value;
    },
    setToken(state, value) {
      state.token = value;
      saveFromLocalStorage('token', value);
    },
  },
  actions: {

  }
})
