import Vue from 'vue'
import Vuex from 'vuex'
import { InitialState } from './initialState'
import { RootState } from './interfaces/rootState'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store<RootState>({
  state: InitialState,
  mutations,
  actions,
  getters
})
