import Getters from '@/store/getters/vehiclesGetters'
import { AVAILABLE_VEHICLES } from '@/store/getters/getterTypes'
import initialState from '@/store/initialState'

describe('vehiclesGetters.js', () => {
  it('should get vehicles from the state', () => {
    const givenVehicles = [
      givenAVehicleFromState({ brand: 'firstBrand', model: 'firstModel', year: 2019, price: 9999, imageUrl: 'firstUrl' }),
      givenAVehicleFromState({ brand: 'secondBrand', model: 'secondModel', year: 2019, price: 9999, imageUrl: 'secondUrl' }),
      givenAVehicleFromState({ brand: 'thirdBrand', model: 'thirdModel', year: 2019, price: 9999, imageUrl: 'thirdUrl' })
    ]
    const givenState = Object.assign({}, initialState, { vehicles: givenVehicles })

    const vehiclesFromGetter = Getters[AVAILABLE_VEHICLES](givenState)

    expect(vehiclesFromGetter).toEqual(givenVehicles)
  })

  function givenAVehicleFromState ({ brand, model, year, price, imageUrl }) {
    return { brand, model, year, price, imageUrl }
  }
})
