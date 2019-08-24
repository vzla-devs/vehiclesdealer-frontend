import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

export function wrapperBuilderFactory (component) {
  const localVue = createLocalVue()
  const options = { component }
  let data
  let state
  let getters
  let actions

  function withRouter (newRouter = {}) {
    const router = new VueRouter()
    if (newRouter.push) router.push = newRouter.push
    options.router = router
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
    if (data) {
      options.data = () => ({ ...data })
    }
    if (options.router) {
      localVue.use(VueRouter)
    }
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
