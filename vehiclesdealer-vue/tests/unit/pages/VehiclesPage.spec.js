import VehiclesPage from '@/pages/VehiclesPage'
import VehiclesContainer from '@/components/VehiclesContainer'
import { componentBuilder } from '@tests/helpers/builderHelpers'

describe('VehiclesPage.vue', () => {
  it('should render correctly', () => {
    const wrapper = aVehiclesPage().build()

    expect(wrapper.find('h1').text()).toBe('Vehículos')
    expect(wrapper.find(VehiclesContainer).exists()).toBe(true)
  })

  function aVehiclesPage () {
    return componentBuilder(VehiclesPage)
  }
})
