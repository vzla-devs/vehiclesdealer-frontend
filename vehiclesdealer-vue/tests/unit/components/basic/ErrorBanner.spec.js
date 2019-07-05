import ErrorBanner from '@/components/basic/ErrorBanner'
import { wrapperBuilderFactory } from '@/helpers/factoryHelpers'

describe( 'ErrorBanner.vue', () => {
  it ('should render correctly', () => {
    const message = 'anyMessage'

    const wrapper = errorBannerBuilder().withProps({ message }).build()

    expect(wrapper.element).toMatchSnapshot()
  })

  it ('should emit onClose event when closing the banner', () => {
    const wrapper = errorBannerBuilder().build()

    wrapper.find('.error-banner').vm.$emit('input')

    expect(wrapper.emitted().onClose).toBeTruthy()
  })

  function errorBannerBuilder () {
    return wrapperBuilderFactory({ component: ErrorBanner, stubs: ['v-alert'] })
  }
})