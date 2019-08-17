import VehiclesPage from '@/pages/VehiclesPage'
import VehiclesContainer from '@/components/VehiclesContainer'
import { wrapperBuilderFactory } from '@tests/helpers/factoryHelpers'

describe('VehiclesPage.vue', () => {
  it('should render correctly', () => {
    const wrapper = vehiclesPageBuilder().build()

    expect(wrapper.find('h1').text()).toBe('Vehículos')
    expect(wrapper.find(VehiclesContainer).exists()).toBe(true)
  })

  function vehiclesPageBuilder () {
    return wrapperBuilderFactory({ component: VehiclesPage })
  }
})
