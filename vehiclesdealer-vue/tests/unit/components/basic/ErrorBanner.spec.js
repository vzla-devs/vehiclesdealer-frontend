import { shallowMount } from '@vue/test-utils'
import ErrorBanner from '@/components/basic/ErrorBanner'

describe('ErrorBanner.vue', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallowMount(ErrorBanner, {
      stubs: ['v-alert']
    })
  })

  it('shows a message', () => {
    const message = 'anyMessage'

    wrapper.setProps({ message })

    expect(wrapper.find('.error-banner').text()).toBe(message)
  })

  it('emits onClose event when input event is emitted', () => {
    wrapper.find('.error-banner').vm.$emit('input')

    expect(wrapper.emitted().onClose).toBeTruthy()
  })
})