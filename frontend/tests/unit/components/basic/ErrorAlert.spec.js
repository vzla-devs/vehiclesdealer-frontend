import ErrorAlert from '@/components/basic/ErrorAlert.vue'
import { AComponent } from '@tests/helpers/builderHelpers'

describe('ErrorAlert.vue', () => {
  it('emits an event when closing the alert', () => {
    const wrapper = AnErrorAlert().build()

    wrapper.find('.error-alert').vm.$emit('input')

    expect(wrapper.emitted().onClose).toBeTruthy()
  })

  function AnErrorAlert () {
    const stubs = { 'v-alert': true }
    return AComponent(ErrorAlert).withStubs(stubs).withProps({ message: '' })
  }
})
