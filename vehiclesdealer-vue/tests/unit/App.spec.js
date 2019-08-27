import { componentBuilder } from '@tests/helpers/builderHelpers'
import App from '@/App.vue'
import ApplicationLayout from '@/layouts/ApplicationLayout.vue'
import { HOME_ROUTE, VEHICLES_ROUTE } from '@/constants/routes'
import { ERROR_MESSAGE } from '@/store/getters/getterTypes'
import { CLEAR_MESSAGE } from '@/store/actions/actionTypes'
import { actionToHaveBeenCalledWith } from '@tests/helpers/testHelpers'
import { MESSAGE_TYPES } from '@/constants/enums'

describe('App.vue', () => {
  it('renders correctly', () => {
    const getters = {
      ERROR_MESSAGE: jest.fn(() => ({ show: false, message: '' }))
    }
    const drawerOptions = [
      { title: 'Inicio', event: 'onHomePage' },
      { title: 'Vehículos', event: 'onVehiclesPage' }
    ]

    const wrapper = anApp().withData({ drawerOptions }).withGetters(getters).build()

    expect(getters[ERROR_MESSAGE]).toHaveBeenCalled()
    expect(wrapper.find(ApplicationLayout).props().drawerOptions).toBe(drawerOptions)
    expect(wrapper.find(ApplicationLayout).contains('#content')).toBe(true)
    expect(wrapper.find(ApplicationLayout).contains('.error-message')).toBe(false)
  })

  it('does not show an error message when there is no error', () => {
    const getters = {
      ERROR_MESSAGE: () => ({ show: false, message: '' })
    }

    const wrapper = anApp().withGetters(getters).build()

    expect(wrapper.find('.error-message').exists()).toBe(false)
  })

  it('shows an error message when there is an error', () => {
    const getters = {
      ERROR_MESSAGE: () => ({ show: true, message: 'anErrorMessage' })
    }

    const wrapper = anApp().withGetters(getters).build()

    expect(wrapper.find('.error-message').exists()).toBe(true)
    expect(wrapper.find('.error-message').props().message).toBe('anErrorMessage')
  })

  it('clears the error message when its corresponding close button is clicked', () => {
    const getters = {
      ERROR_MESSAGE: () => ({ show: true, message: 'anErrorMessage' })
    }
    const actions = {
      CLEAR_MESSAGE: jest.fn()
    }
    const wrapper = anApp().withGetters(getters).withActions(actions).build()

    wrapper.find('.error-message').vm.$emit('onClose')

    actionToHaveBeenCalledWith(actions[CLEAR_MESSAGE], MESSAGE_TYPES.ERROR)
  })

  it('navigates to the home page when the corresponding option is clicked', () => {
    const router = {
      push: jest.fn()
    }
    const wrapper = anApp().withRouter(router).build()

    wrapper.find(ApplicationLayout).vm.$emit('onHomePage')

    expect(router.push).toHaveBeenCalledWith(HOME_ROUTE)
  })

  it('navigates to the vehicles page when the corresponding option is clicked', () => {
    const router = {
      push: jest.fn()
    }
    const wrapper = anApp().withRouter(router).build()

    wrapper.find(ApplicationLayout).vm.$emit('onVehiclesPage')

    expect(router.push).toHaveBeenCalledWith(VEHICLES_ROUTE)
  })

  function anApp () {
    const getters = {
      ERROR_MESSAGE: () => ({ show: false, message: '' })
    }
    const actions = {
      CLEAR_MESSAGE: () => {}
    }
    return componentBuilder(App).withRouter().withGetters(getters).withActions(actions)
  }
})
