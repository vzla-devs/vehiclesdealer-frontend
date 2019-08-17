import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

export function wrapperBuilderFactory ({ component }) {
  const localVue = createLocalVue()
  const options = { component }
  let state
  let getters
  let actions

  function withStubs (newStubs) {
    options.stubs = newStubs
    return self
  }

  function withProps (newProps) {
    options.propsData = newProps
    return self
  }

  function withData (newData) {
    options.data = () => (newData)
    return self
  }

  function withRouter (newRouter) {
    localVue.use(VueRouter)
    options.router = newRouter
    return self
  }

  function withGetters (newGetters) {
    getters = newGetters
    return self
  }

  function withActions (newActions) {
    actions = newActions
    return self
  }

  function withState (newState) {
    state = newState
    return self
  }

  function build () {
    if (state || getters || actions) {
      localVue.use(Vuex)
      options.store = new Vuex.Store({ state, getters, actions })
    }
    options.localVue = localVue
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
