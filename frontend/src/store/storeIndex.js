import Vue from 'vue'
import Vuex from 'vuex'
import state from './initialState'
import mutations from './mutations/mutationsIndex'
import actions from './actions/actionsIndex'
import getters from './getters/gettersIndex'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
