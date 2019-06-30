import ErrorBanner from '@/components/basic/ErrorBanner'
import { createWrapperFactory } from '@/helpers/factoryHelpers'

describe( 'ErrorBanner.vue', () => {

  it ('should render correctly', () => {
    const message = 'anyMessage'

    const wrapper = wrapperFactory().withProps({ message }).build()

    expect(wrapper.element).toMatchSnapshot()
  })

  it ('should emit onClose event when closing the banner', () => {
    const wrapper = wrapperFactory().build()

    wrapper.find('.error-banner').vm.$emit('input')

    expect(wrapper.emitted().onClose).toBeTruthy()
  })

  function wrapperFactory () {
    const stubs = ['v-alert']
    return createWrapperFactory({ component: ErrorBanner, stubs })
  }
})