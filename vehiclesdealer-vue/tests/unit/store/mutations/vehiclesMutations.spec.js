import VehiclesMutations from '@/store/mutations/vehiclesMutations'
import { SET_VEHICLES } from '@/store/mutations/mutationsTypes'

describe('vehiclesMutations.js', () => {
  test('update state with vehicles', () => {
    const givenState = { vehicles: [] }
    const givenVehicles = [
      givenAVehicle({ brand: 'firstBrand', model: 'firstModel', year: 2019, price: 9999, imageUrl: 'firstUrl' }),
      givenAVehicle({ brand: 'secondBrand', model: 'secondModel', year: 2019, price: 9999, imageUrl: 'secondUrl' })
    ]

    VehiclesMutations[SET_VEHICLES](givenState, givenVehicles)

    const expectedState = { vehicles: givenVehicles }
    expect(givenState).toEqual(expectedState)
  })

  function givenAVehicle ({ brand, model, year, price, imageUrl }) {
    return { brand, model, year, price, imageUrl }
  }
})