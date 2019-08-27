import ErrorBanner from '@/components/basic/ErrorBanner.vue'
import { componentBuilder } from '@tests/helpers/builderHelpers'

describe('ErrorBanner.vue', () => {
  it('shows an error message', () => {
    const message = 'anyMessage'

    const wrapper = anErrorBanner().withProps({ message }).build()

    expect(wrapper.element).toMatchSnapshot()
  })

  it('emits an event when closing the banner', () => {
    const wrapper = anErrorBanner().build()

    wrapper.find('.error-banner').vm.$emit('input')

    expect(wrapper.emitted().onClose).toBeTruthy()
  })

  function anErrorBanner () {
    const stubs = { 'v-alert': true }
    return componentBuilder(ErrorBanner).withStubs(stubs).withProps({ message: '' })
  }
})
