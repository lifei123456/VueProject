import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  user: {},
  login: "登录",
  pageNow: '登录页面'
};

const mutations = {
  isLogin(state, user) {
    state.user = user
  },
  showPage(state, page) {
    state.pageNow = page
  },
  changeLogin(state, login) {
    state.login = login;
  }
};

export default new Vuex.Store({
  state,
  mutations,
})
