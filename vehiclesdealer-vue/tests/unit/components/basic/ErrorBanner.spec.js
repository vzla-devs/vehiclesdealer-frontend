import ErrorBanner from '@/components/basic/ErrorBanner'
import { wrapperBuilderFactory } from '@tests/helpers/factoryHelpers'

describe('ErrorBanner.vue', () => {
  const stubs = ['v-alert']
  it('should show an error message', () => {
    const message = 'anyMessage'

    const wrapper = errorBannerBuilder().withStubs(stubs).withProps({ message }).build()

    expect(wrapper.element).toMatchSnapshot()
  })

  it('should emit onClose event when closing the banner', () => {
    const wrapper = errorBannerBuilder().withStubs(stubs).withProps({ message: '' }).build()

    wrapper.find('.error-banner').vm.$emit('input')

    expect(wrapper.emitted().onClose).toBeTruthy()
  })

  function errorBannerBuilder () {
    return wrapperBuilderFactory({ component: ErrorBanner })
  }
})
