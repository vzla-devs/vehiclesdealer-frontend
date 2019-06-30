import { shallowMount } from '@vue/test-utils'
import ErrorBanner from '@/components/basic/ErrorBanner'

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
    let propsData = {}

    function withProps (props) {
      propsData = { ...props }
      return self
    }

    function build () {
      const stubs = ['v-alert']
      return shallowMount(ErrorBanner, { stubs, propsData })
    }

    const self = {
      withProps,
      build
    }
    return self
  }
})