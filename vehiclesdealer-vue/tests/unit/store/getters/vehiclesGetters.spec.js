import vehiclesGetters from '@/store/getters/vehiclesGetters'
import { GET_AVAILABLE_VEHICLES } from '@/store/getters/gettersTypes'
import initialState from '@/store/initialState'

describe ('vehiclesGetters.js', () => {

  it ('should get vehicles from the state', () => {
    const givenVehicles = [
      givenAVehicleFromState({ brand: 'firstBrand', model: 'firstModel', year: 2019, price: 9999, imageUrl: 'firstUrl' }),
      givenAVehicleFromState({ brand: 'secondBrand', model: 'secondModel', year:  2019, price: 9999, imageUrl: 'secondUrl' }),
      givenAVehicleFromState({ brand: 'thirdBrand', model: 'thirdModel', year: 2019, price: 9999, imageUrl: 'thirdUrl' })
    ]
    const givenState = Object.assign({}, initialState, { vehicles: givenVehicles })
  
    const vehiclesFromGetter = vehiclesGetters[GET_AVAILABLE_VEHICLES](givenState)

    expect(vehiclesFromGetter).toEqual(givenVehicles)
    expect(vehiclesFromGetter).not.toBe(givenVehicles)
  })

  function givenAVehicleFromState ({ brand, model, year, price, imageUrl }) {
    return { brand, model, year, price, imageUrl }
  }
})