import Vue from 'vue'
import Vuex from 'vuex'
import { InitialState } from './models/initialState'
import { RootState } from './models/rootState'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store<RootState>({
  state: new InitialState(),
  mutations,
  actions,
  getters
})
