import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

export function wrapperBuilderFactory ({ component, stubs }) {
  const localVue = createLocalVue()
  let propsData = {}
  let store

  function withProps (props) {
    propsData = { ...props }
    return self
  }

  function withRouter () {
    localVue.use(VueRouter)
    return self
  }

  function withStore (newStore) {
    store = newStore
    return self
  }

  function build () {
    store = store ? new Vuex.Store({ ...store }) : undefined
    return shallowMount(component, { localVue, stubs, propsData, store })
  }

  const self = {
    withProps,
    withRouter,
    withStore,
    build
  }
  return self
}