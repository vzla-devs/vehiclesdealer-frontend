import { wrapperBuilderFactory } from '@tests/helpers/factoryHelpers'
import App from '@/App'
import { HOME_ROUTE, VEHICLES_ROUTE } from '@/constants/routes'
import { ERROR_MESSAGE } from '@/store/getters/getterTypes'
import { CLEAR_MESSAGE, SHOW_MESSAGE } from '@/store/actions/actionTypes'
import VueRouter from 'vue-router'
import ExpectHelpers from '@tests/helpers/expectHelpers'
import messagesTypes from '@/enums/messagesTypes'
import flushPromises from 'flush-promises'

describe('App.vue', () => {
  const router = new VueRouter()
  let getters = {}
  let actions = {}

  beforeEach(() => {
    getters[ERROR_MESSAGE] = () => ({ show: false, message: '' })
    actions[SHOW_MESSAGE] = jest.fn()
    actions[CLEAR_MESSAGE] = jest.fn()
  })

  it('should render correctly', () => {
    const wrapper = wrapperBuilder().withRouter(router).withGetters(getters).withActions(actions).build()

    expect(wrapper.find('.home-link').text()).toBe('Inicio')
    expect(wrapper.find('.home-link').props().to).toBe(HOME_ROUTE)
    expect(wrapper.find('.vehicles-link').text()).toBe('Vehículos')
    expect(wrapper.find('.vehicles-link').props().to).toBe(VEHICLES_ROUTE)
    expect(wrapper.find('#content').exists()).toBe(true)
  })

  it('should show an error message when there is an error', async () => {
    getters[ERROR_MESSAGE] = () => ({ show: true, message: 'anErrorMessage' })
    const wrapper = wrapperBuilder().withRouter(router).withGetters(getters).withActions(actions).build()
    await flushPromises()
    wrapper.find('.error-message').vm.$emit('onClose')

    expect(wrapper.find('.error-message').exists()).toBe(true)
    expect(wrapper.find('.error-message').props().message).toBe('anErrorMessage')
  })

  it('should clear the error message when its corresponding close button is clicked', () => {
    getters[ERROR_MESSAGE] = () => ({ show: true, message: 'anErrorMessage' })
    const wrapper = wrapperBuilder().withRouter(router).withGetters(getters).withActions(actions).build()

    wrapper.find('.error-message').vm.$emit('onClose')

    ExpectHelpers().actionToHaveBeenCalledWith(actions[CLEAR_MESSAGE], messagesTypes().error)
  })

  function wrapperBuilder () {
    return wrapperBuilderFactory({ component: App })
  }
})
