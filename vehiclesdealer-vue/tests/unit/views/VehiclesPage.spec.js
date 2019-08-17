import VehiclesPage from './node_modules/@/views/VehiclesPage'
import VehiclesContainer from './node_modules/@/components/VehiclesContainer'
import { wrapperBuilderFactory } from './node_modules/@tests/helpers/factoryHelpers'

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
