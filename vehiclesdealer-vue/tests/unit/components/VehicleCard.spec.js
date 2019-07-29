import VehicleCard from '@/components/VehicleCard'
import ImageStub from '@tests/components/stubs/ImageStub'
import { wrapperBuilderFactory } from '@tests/helpers/factoryHelpers'

describe('VehicleCard.vue', () => {
  const stubs = { 'v-img': ImageStub, 'v-card': true, 'v-card-title': true }
  it('should render correctly', () => {
    const brand = 'anyBrand'
    const model = 'anyModel'
    const year = 2019
    const price = 9999
    const imageUrl = 'anyUrl'

    const wrapper = vehicleCardBuilder().withStubs(stubs).withProps({ brand, model, year, price, imageUrl }).build()

    expect(wrapper.element).toMatchSnapshot()
  })

  function vehicleCardBuilder () {
    return wrapperBuilderFactory({ component: VehicleCard })
  }
})
