import VehicleCard from '@/components/VehicleCard'
import ImageStub from '@tests/components/stubs/ImageStub'
import { componentBuilder } from '@tests/helpers/builderHelpers'

describe('VehicleCard.vue', () => {
  it('should render correctly', () => {
    const brand = 'anyBrand'
    const model = 'anyModel'
    const year = 2019
    const price = 9999
    const imageUrl = 'anyUrl'

    const wrapper = aVehicleCard().withProps({ brand, model, year, price, imageUrl }).build()

    expect(wrapper.element).toMatchSnapshot()
  })

  function aVehicleCard () {
    const stubs = { 'v-img': ImageStub, 'v-card': true, 'v-card-title': true }
    return componentBuilder(VehicleCard).withStubs(stubs)
  }
})
