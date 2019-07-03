import { createLocalVue } from '@vue/test-utils'
import { wrapperBuilderFactory } from '@/helpers/factoryHelpers'
import App from '@/App'
import VueRouter from 'vue-router'
import { HOME_ROUTE, VEHICLES_ROUTE } from '@/constants/routes'

describe ('App.vue', () => {
  const localVue = createLocalVue()
  localVue.use(VueRouter)

  it ('should render correctly', () => {
    const app = appBuilder().build()

    expect(app.homeLink().text()).toBe('Inicio')
    expect(app.homeLink().props().to).toBe(HOME_ROUTE)
    expect(app.vehiclesLink().text()).toBe('Vehículos')
    expect(app.vehiclesLink().props().to).toBe(VEHICLES_ROUTE)
    expect(app.content().exists()).toBe(true)
  })

  function appBuilder () {
    let wrapper

    function build () {
      wrapper = wrapperBuilderFactory({ component: App, localVue }).build()
      return self
    }

    const self = {
      build,
      homeLink: () => wrapper.find('.home-link'),
      vehiclesLink: () => wrapper.find('.vehicles-link'),
      content: () => wrapper.find('#content')
    }
    return self
  }
})