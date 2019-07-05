import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

export function wrapperBuilderFactory ({ component, stubs }) {
  const localVue = createLocalVue()
  let propsData = {}
  let getters
  let actions

  function withProps (props) {
    propsData = { ...props }
    return self
  }

  function withRouter () {
    localVue.use(VueRouter)
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

  function build () {
    let store
    if (getters || actions) {
      localVue.use(Vuex)
      store = new Vuex.Store({ getters, actions })
    }
    return shallowMount(component, { localVue, stubs, propsData, store })
  }

  const self = {
    withProps,
    withRouter,
    withGetters,
    withActions,
    build
  }
  return self
}