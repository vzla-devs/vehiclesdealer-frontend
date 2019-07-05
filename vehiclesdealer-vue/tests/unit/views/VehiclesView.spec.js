import VehiclesView from '@/views/VehiclesView'
import VehiclesContainer from '@/components/VehiclesContainer'
import { wrapperBuilderFactory } from '@/helpers/factoryHelpers'

describe ('VehiclesView.vue', () => {
  it ('should render correctly', () => {
    const wrapper = vehiclesViewBuilder().build()

    expect(wrapper.find('.title').text()).toBe('Vehículos')
    expect(wrapper.find(VehiclesContainer).exists()).toBe(true)
  })

  function vehiclesViewBuilder () {
    return wrapperBuilderFactory({ component: VehiclesView })
  }
})