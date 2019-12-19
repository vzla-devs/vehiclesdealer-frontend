import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import initialState from '@/store/models/initialState'

export function AComponent (component) {
  const options = { component }
  let data
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

  function build () {
    const localVue = createLocalVue()
    if (data) {
      options.data = () => ({ ...data })
    }
    if (options.router) {
      localVue.use(VueRouter)
    }
    if (getters || actions) {
      localVue.use(Vuex)
      options.store = new Vuex.Store({ getters, actions })
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
    build
  }
  return self
}

export function AState () {
  let state = { ...initialState }

  function withValue (newState) {
    state = { ...state, ...newState }
    return self
  }

  function build () {
    return state
  }

  const self = {
    withValue,
    build
  }
  return self
}
