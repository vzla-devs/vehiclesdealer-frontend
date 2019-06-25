import { shallowMount } from '@vue/test-utils'
import VehiclesView from '@/views/VehiclesView'
import VehiclesContainer from '@/components/VehiclesContainer'

describe('VehiclesView.vue', () => {
  it('shows the corresponding view structure', () => {
    const wrapper = shallowMount(VehiclesView)

    expect(wrapper.find('.title').text()).toBe('Vehículos')
    expect(wrapper.find(VehiclesContainer).exists()).toBe(true)
  })
})