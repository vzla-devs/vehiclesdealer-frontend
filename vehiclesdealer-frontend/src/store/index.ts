import Vue from 'vue'
import Vuex from 'vuex'
import { InitialState } from '@/store/models/initialState'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  state: new InitialState(),
  mutations,
  actions,
  getters
})
