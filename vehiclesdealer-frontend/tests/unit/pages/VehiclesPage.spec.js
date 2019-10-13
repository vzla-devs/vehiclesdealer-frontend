import VehiclesPage from '@/pages/VehiclesPage.vue'
import VehiclesContainer from '@/components/VehiclesContainer.vue'
import PageLayout from '@/layouts/PageLayout.vue'
import { componentBuilder } from '@tests/helpers/builderHelpers'

describe('VehiclesPage.vue', () => {
  it('renders correctly', () => {
    const wrapper = aVehiclesPage().build()

    expect(wrapper.contains(PageLayout)).toBe(true)
    const layout = wrapper.find(PageLayout)
    expect(layout.find('h1').text()).toBe('Vehículos')
    expect(layout.contains(VehiclesContainer)).toBe(true)
  })

  function aVehiclesPage () {
    return componentBuilder(VehiclesPage)
  }
})
