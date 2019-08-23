import ErrorBanner from '@/components/basic/ErrorBanner'
import { wrapperBuilderFactory } from '@tests/helpers/factoryHelpers'

describe('ErrorBanner.vue', () => {
  it('should show an error message', () => {
    const message = 'anyMessage'

    const wrapper = errorBannerBuilder().withProps({ message }).build()

    expect(wrapper.element).toMatchSnapshot()
  })

  it('should emit onClose event when closing the banner', () => {
    const wrapper = errorBannerBuilder().build()

    wrapper.find('.error-banner').vm.$emit('input')

    expect(wrapper.emitted().onClose).toBeTruthy()
  })

  function errorBannerBuilder () {
    const stubs = { 'v-alert': true }
    return wrapperBuilderFactory(ErrorBanner).withStubs(stubs).withProps({ message: '' })
  }
})
