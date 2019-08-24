import { wrapperBuilderFactory } from '@tests/helpers/factoryHelpers'
import App from '@/App'
import ApplicationLayout from '@/layouts/ApplicationLayout'
import { HOME_ROUTE, VEHICLES_ROUTE } from '@/constants/routes'
import { ERROR_MESSAGE } from '@/store/getters/getterTypes'
import { CLEAR_MESSAGE } from '@/store/actions/actionTypes'
import VueRouter from 'vue-router'
import { actionToHaveBeenCalledWith } from '@tests/helpers/testHelpers'
import MessageTypes from '@/constants/MessageTypes'

describe('App.vue', () => {
  it('should render correctly', () => {
    const getters = {
      ERROR_MESSAGE: jest.fn(() => ({ show: false, message: '' }))
    }
    const drawerOptions = [
      { title: 'Inicio', event: 'onHomePage' },
      { title: 'Vehículos', event: 'onVehiclesPage' }
    ]

    const wrapper = wrapperBuilder().withData({ drawerOptions }).withGetters(getters).build()

    expect(getters[ERROR_MESSAGE]).toHaveBeenCalled()
    expect(wrapper.find(ApplicationLayout).props().drawerOptions).toBe(drawerOptions)
    expect(wrapper.find(ApplicationLayout).contains('#content')).toBe(true)
    expect(wrapper.find(ApplicationLayout).contains('.error-message')).toBe(false)
  })

  it('should not show an error message when there is no error', () => {
    const getters = {
      ERROR_MESSAGE: () => ({ show: false, message: '' })
    }

    const wrapper = wrapperBuilder().withGetters(getters).build()

    expect(wrapper.find('.error-message').exists()).toBe(false)
  })

  it('should show an error message when there is an error', () => {
    const getters = {
      ERROR_MESSAGE: () => ({ show: true, message: 'anErrorMessage' })
    }

    const wrapper = wrapperBuilder().withGetters(getters).build()

    expect(wrapper.find('.error-message').exists()).toBe(true)
    expect(wrapper.find('.error-message').props().message).toBe('anErrorMessage')
  })

  it('should clear the error message when its corresponding close button is clicked', () => {
    const getters = {
      ERROR_MESSAGE: () => ({ show: true, message: 'anErrorMessage' })
    }
    const actions = {
      CLEAR_MESSAGE: jest.fn()
    }
    const wrapper = wrapperBuilder().withGetters(getters).withActions(actions).build()

    wrapper.find('.error-message').vm.$emit('onClose')

    actionToHaveBeenCalledWith(actions[CLEAR_MESSAGE], MessageTypes.ERROR)
  })

  it('should navigate to the home page when the corresponding option is clicked', () => {
    const router = new VueRouter()
    router.push = jest.fn()
    const wrapper = wrapperBuilder().withRouter(router).build()

    wrapper.find(ApplicationLayout).vm.$emit('onHomePage')

    expect(router.push).toHaveBeenCalledWith(HOME_ROUTE)
  })

  it('should navigate to the vehicles page when the corresponding option is clicked', () => {
    const router = new VueRouter()
    router.push = jest.fn()
    const wrapper = wrapperBuilder().withRouter(router).build()

    wrapper.find(ApplicationLayout).vm.$emit('onVehiclesPage')

    expect(router.push).toHaveBeenCalledWith(VEHICLES_ROUTE)
  })

  function wrapperBuilder () {
    const router = new VueRouter()
    const getters = {
      ERROR_MESSAGE: () => ({ show: false, message: '' })
    }
    const actions = {
      CLEAR_MESSAGE: jest.fn()
    }
    return wrapperBuilderFactory(App).withRouter(router).withGetters(getters).withActions(actions)
  }
})
