import ErrorBanner from '@/components/basic/ErrorBanner'
import { wrapperBuilderFactory } from '@/helpers/factoryHelpers'

describe( 'ErrorBanner.vue', () => {

  it ('should render correctly', () => {
    const message = 'anyMessage'

    const wrapper = wrapperBuilder().withProps({ message }).build()

    expect(wrapper.element).toMatchSnapshot()
  })

  it ('should emit onClose event when closing the banner', () => {
    const wrapper = wrapperBuilder().build()

    wrapper.find('.error-banner').vm.$emit('input')

    expect(wrapper.emitted().onClose).toBeTruthy()
  })

  function wrapperBuilder () {
    const stubs = ['v-alert']
    return wrapperBuilderFactory({ component: ErrorBanner, stubs })
  }
})