import { componentBuilder } from '@tests/helpers/builderHelpers'
import App from '@/App.vue'
import { ERROR_MESSAGE } from '@/store/getters/getterTypes'
import { CLEAR_MESSAGE } from '@/store/actions/actionTypes'
import { actionToHaveBeenCalledWith } from '@tests/helpers/testHelpers'
import { MESSAGE_TYPES } from '@/constants/enums'

describe('App.vue', () => {
  it('does not show an error message when there is no error', () => {
    const getters = {}
    getters[ERROR_MESSAGE] = () => ({ show: false, message: '' })

    const wrapper = anApp().withGetters(getters).build()

    expect(wrapper.contains('.error-message')).toBe(false)
  })

  it('shows an error message when there is an error', () => {
    const getters = {}
    getters[ERROR_MESSAGE] = () => ({ show: true, message: 'anErrorMessage' })

    const wrapper = anApp().withGetters(getters).build()

    expect(wrapper.contains('.error-message')).toBe(true)
    expect(wrapper.find('.error-message').props().message).toBe('anErrorMessage')
  })

  it('clears the error message when its corresponding close button is clicked', () => {
    const getters = {}
    getters[ERROR_MESSAGE] = () => ({ show: true, message: 'anErrorMessage' })
    const actions = {}
    actions[CLEAR_MESSAGE] = jest.fn()
    const wrapper = anApp().withGetters(getters).withActions(actions).build()

    wrapper.find('.error-message').vm.$emit('onClose')

    actionToHaveBeenCalledWith(actions[CLEAR_MESSAGE], MESSAGE_TYPES.ERROR)
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
