import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils'
import Vuex from 'vuex'

export class AComponent {
  component: any
  options: any
  getters?: any
  actions?: any

  constructor (component: any) {
    this.component = component
    this.options = {}
  }

  withStubs (newStubs: Object): AComponent {
    this.options.stubs = { ...this.options.stubs, ...newStubs }
    return this
  }

  withProps (newProps: Object): AComponent {
    this.options.propsData = { ...this.options.propsData, ...newProps }
    return this
  }

  withGetters (newGetters: any): AComponent {
    this.getters = { ...this.getters, ...newGetters }
    return this
  }

  withActions (newActions: any): AComponent {
    this.actions = { ...this.actions, ...newActions }
    return this
  }

  build (): Wrapper<Vue> {
    const localVue = createLocalVue()
    if (this.getters || this.actions) {
      localVue.use(Vuex)
      this.options.store = new Vuex.Store({ getters: this.getters, actions: this.actions })
    }
    this.options.localVue = localVue
    return shallowMount(this.component, this.options)
  }
}
