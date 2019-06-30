import ErrorBanner from '@/components/basic/ErrorBanner'
import { createWrapperFactory } from '@/helpers/factoryHelpers'

describe( 'ErrorBanner.vue', () => {

  it ('should render correctly', () => {
    const message = 'anyMessage'

    const wrapper = factory().withProps({ message }).build()

    expect(wrapper.element).toMatchSnapshot()
  })

  it ('should emit onClose event when closing the banner', () => {
    const wrapper = factory().build()

    wrapper.find('.error-banner').vm.$emit('input')

    expect(wrapper.emitted().onClose).toBeTruthy()
  })

  function factory () {
    const stubs = ['v-alert']
    return createWrapperFactory({ component: ErrorBanner, stubs })
  }
})