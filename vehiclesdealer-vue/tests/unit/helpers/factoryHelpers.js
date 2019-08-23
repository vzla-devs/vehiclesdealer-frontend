import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

export function wrapperBuilderFactory ({ component }) {
  const localVue = createLocalVue()
  const options = { component }
  let data
  let state
  let getters
  let actions

  function withRouter (newRouter) {
    localVue.use(VueRouter)
    options.router = newRouter
    return self
  }

  function withStubs (newStubs) {
    options.stubs = { ...options.stubs, ...newStubs }
    return self
  }

  function withProps (newProps) {
    options.propsData = { ...options.propsData, ...newProps }
    return self
  }

  function withData (newData) {
    data = { ...data, ...newData }
    return self
  }

  function withGetters (newGetters) {
    getters = { ...getters, ...newGetters }
    return self
  }

  function withActions (newActions) {
    actions = { ...actions, ...newActions }
    return self
  }

  function withState (newState) {
    state = { ...state, ...newState }
    return self
  }

  function build () {
    if (state || getters || actions) {
      localVue.use(Vuex)
      options.store = new Vuex.Store({ state, getters, actions })
    }
    options.localVue = localVue
    if (data) options.data = () => ({ ...data })
    return shallowMount(component, options)
  }

  const self = {
    withStubs,
    withProps,
    withData,
    withRouter,
    withGetters,
    withActions,
    withState,
    build
  }
  return self
}
