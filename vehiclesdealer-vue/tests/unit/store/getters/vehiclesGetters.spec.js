import Getters from '@/store/getters/vehiclesGetters'
import { AVAILABLE_VEHICLES } from '@/store/getters/getterTypes'
import { buildState } from '@tests/helpers/builderHelpers'

describe('vehiclesGetters.js', () => {
  it('should get vehicles from the state', () => {
    const vehicles = [
      givenAVehicleFromState({ brand: 'firstBrand', model: 'firstModel', year: 2019, price: 9999, imageUrl: 'firstUrl' }),
      givenAVehicleFromState({ brand: 'secondBrand', model: 'secondModel', year: 2019, price: 9999, imageUrl: 'secondUrl' }),
      givenAVehicleFromState({ brand: 'thirdBrand', model: 'thirdModel', year: 2019, price: 9999, imageUrl: 'thirdUrl' })
    ]
    const givenState = buildState({ vehicles })

    const vehiclesFromGetter = Getters[AVAILABLE_VEHICLES](givenState)

    expect(vehiclesFromGetter).toEqual(vehicles)
  })

  function givenAVehicleFromState ({ brand, model, year, price, imageUrl }) {
    return { brand, model, year, price, imageUrl }
  }
})
