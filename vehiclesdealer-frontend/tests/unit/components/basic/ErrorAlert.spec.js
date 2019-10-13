import ErrorAlert from '@/components/basic/ErrorAlert.vue'
import { componentBuilder } from '@tests/helpers/builderHelpers'

describe('ErrorAlert.vue', () => {
  it('shows an error message', () => {
    const message = 'anyMessage'

    const wrapper = anErrorAlert().withProps({ message }).build()

    expect(wrapper.element).toMatchSnapshot()
  })

  it('emits an event when closing the alert', () => {
    const wrapper = anErrorAlert().build()

    wrapper.find('.error-alert').vm.$emit('input')

    expect(wrapper.emitted().onClose).toBeTruthy()
  })

  function anErrorAlert () {
    const stubs = { 'v-alert': true }
    return componentBuilder(ErrorAlert).withStubs(stubs).withProps({ message: '' })
  }
})
