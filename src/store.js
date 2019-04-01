import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function loadFromCookies(key) {
  var arr = document.cookie.match(new RegExp("(^| )" + key + "=([^;]*)(;|$)"));
  if (arr != null) {
    return unescape(arr[2]);
  }
  return null;
}

function saveFromCookies(key, value) {
  document.cookie = key + "=" + JSON.stringify(value);
}

export default new Vuex.Store({
  state: {
    token: loadFromCookies('token') || '',
    userId: null,
  },
  mutations: {
    setUserId(state, value) {
      state.userId = value;
    },
    setToken(state, value) {
      state.token = value;
      saveFromCookies('token', value);
    },
  },
  actions: {

  }
})
