import ErrorBanner from '@/components/basic/ErrorBanner'
import { wrapperBuilderFactory } from '@/helpers/factoryHelpers'

describe( 'ErrorBanner.vue', () => {

  it ('should render correctly', () => {
    const message = 'anyMessage'

    const errorBanner = errorBannerBuilder().withMessage(message).build()

    expect(errorBanner.snapshot()).toMatchSnapshot()
  })

  it ('should emit onClose event when closing the banner', () => {
    const errorBanner = errorBannerBuilder().build()

    errorBanner.closeErrorBanner()

    expect(errorBanner.emitted().onClose).toBeTruthy()
  })

  function errorBannerBuilder () {
    const wrapperBuilder = wrapperBuilderFactory({ component: ErrorBanner, stubs: ['v-alert'] })
    let message = ''
    let wrapper

    function withMessage (newMessage) {
      message = newMessage
      return self
    }

    function build () {
      wrapper = wrapperBuilder.withProps({ message }).build()
      return self
    }

    const self = {
      withMessage,
      build,
      snapshot: () => wrapper.element,
      closeErrorBanner: () => wrapper.find('.error-banner').vm.$emit('input'),
      emitted: () => wrapper.emitted()
    }
    return self
  }
})