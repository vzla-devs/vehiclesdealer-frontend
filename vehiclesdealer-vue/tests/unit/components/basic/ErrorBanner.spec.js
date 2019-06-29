import { shallowMount } from '@vue/test-utils'
import ErrorBanner from '@/components/basic/ErrorBanner'

describe('ErrorBanner.vue', () => {
  test('renders correctly', () => {
    const message = 'anyMessage'

    const wrapper = AnErrorBanner().withProps({ message }).build()

    expect(wrapper.element).toMatchSnapshot()
  })

  test('emits onClose event when input event is emitted', () => {
    const wrapper = AnErrorBanner().build()

    wrapper.find('.error-banner').vm.$emit('input')

    expect(wrapper.emitted().onClose).toBeTruthy()
  })

  function AnErrorBanner () {
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