import { shallowMount } from '@vue/test-utils'
import ErrorBanner from '@/components/basic/ErrorBanner'

describe('ErrorBanner.vue', () => {
  const stubs = ['v-alert']
  it('shows a message', () => {
    const message = 'anyMessage'
    const wrapper = shallowMount(ErrorBanner, { stubs })

    wrapper.setProps({ message })

    expect(wrapper.find('.error-banner').text()).toBe(message)
  })

  it('emits onClose event when input event is emitted', () => {
    const wrapper = shallowMount(ErrorBanner, { stubs })

    wrapper.find('.error-banner').vm.$emit('input')

    expect(wrapper.emitted().onClose).toBeTruthy()
  })
})