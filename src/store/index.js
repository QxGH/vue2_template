import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userInfo: null,
};

const mutations = {
  CHANGE_USER_INFO(state, val) {
    state.userInfo = val;
  },
};

export default new Vuex.Store({
  state,
  mutations
})
