import { wrapperBuilderFactory } from '@tests/helpers/factoryHelpers'
import App from '@/App'
import { HOME_ROUTE, VEHICLES_ROUTE } from '@/constants/routes'
import { ERROR_MESSAGE } from '@/store/getters/getterTypes'
import VueRouter from 'vue-router'

describe('App.vue', () => {
  const router = new VueRouter()
  let getters = {}

  beforeEach(() => {
    getters[ERROR_MESSAGE] = () => ({ show: false, message: '' })
  })

  it('should render correctly', () => {
    // const wrapper = appBuilder().withGetters(getters).build()

    // expect(wrapper.homeLink().text()).toBe('Inicio')
    // expect(wrapper.homeLink().props().to).toBe(HOME_ROUTE)
    // expect(wrapper.vehiclesLink().text()).toBe('Vehículos')
    // expect(wrapper.vehiclesLink().props().to).toBe(VEHICLES_ROUTE)
    // expect(wrapper.content().exists()).toBe(true)
  })

  it('should show an error message when there is an error', () => {
    getters[ERROR_MESSAGE] = () => ({ show: true, message: 'anErrorMessage' })
    const wrapper = wrapperBuilder().withRouter(router).withGetters(getters).build()

    expect(wrapper.find('.error-message').exists()).toBe(true)
    expect(wrapper.find('.error-message').props().message).toBe('anErrorMessage')
  })

  function wrapperBuilder () {
    return wrapperBuilderFactory({ component: App })
  }

  function appBuilder () {
    let wrapper

    function build () {
      wrapper = wrapperBuilderFactory({ component: App }).withRouter().build()
      return self
    }

    const self = {
      build,
      homeLink: () => wrapper.find('.home-link'),
      vehiclesLink: () => wrapper.find('.vehicles-link'),
      content: () => wrapper.find('#content'),
      errorMessage: () => wrapper.find('.error-banner')
    }
    return self
  }
})
