import ErrorBanner from '@/components/basic/ErrorBanner'
import { wrapperBuilderFactory } from '@/helpers/factoryHelpers'

describe( 'ErrorBanner.vue', () => {

  it ('should render correctly', () => {
    const message = 'anyMessage'

    const wrapper = errorBannerBuilder().withMessage(message).build()

    expect(wrapper.snapshot()).toMatchSnapshot()
  })

  it ('should emit onClose event when closing the banner', () => {
    const wrapper = errorBannerBuilder().build()

    wrapper.closeErrorBanner()

    expect(wrapper.emitted().onClose).toBeTruthy()
  })

  function errorBannerBuilder () {
    let message = ''
    let wrapper

    function withMessage (newMessage) {
      message = newMessage
      return self
    }

    function build () {
      wrapper = wrapperBuilderFactory({ component: ErrorBanner, stubs: ['v-alert'] }).withProps({ message }).build()
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