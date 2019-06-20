import vehiclesGetters from '@/store/getters/vehiclesGetters'
import { GET_VEHICLES } from '@/store/getters/gettersTypes'
import initialState from '@/store/initialState'

describe('vehiclesGetters.js', () => {
  test('get vehicles', () => {
    const givenVehicles = [
      givenAVehicle({ brand: 'firstBrand', model: 'firstModel', year: 2019, price: 9999, imageUrl: 'firstUrl' }),
      givenAVehicle({ brand: 'secondBrand', model: 'secondModel', year:  2019, price: 9999, imageUrl: 'secondUrl' }),
      givenAVehicle({ brand: 'thirdBrand', model: 'thirdModel', year: 2019, price: 9999, imageUrl: 'thirdUrl' })
    ]
    const state = Object.assign({}, initialState, { vehicles: givenVehicles })
  
    const vehiclesFromGetter = vehiclesGetters[GET_VEHICLES](state)
  
    expect(vehiclesFromGetter).toEqual(givenVehicles)
    expect(vehiclesFromGetter).not.toBe(givenVehicles)
  })

  function givenAVehicle ({ brand, model, year, price, imageUrl } = {}) {
    return { brand, model, year, price, imageUrl }
  }
})