import { shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'

export function wrapperBuilderFactory ({ component, localVue, stubs }) {
  let propsData = {}
  let store

  function withProps (props) {
    propsData = { ...props }
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
    withStore,
    build
  }
  return self
}