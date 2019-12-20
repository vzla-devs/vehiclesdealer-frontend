import getters from '@/store/getters/vehiclesGetters'
import { AState } from '@tests/builders/stateBuilder'
import { Vehicle } from '@/store/models/vehicle'

describe('vehiclesGetters.js', () => {
  it('gets the vehicles from the state', () => {
    const vehicles = [
      new Vehicle('1', 'firstBrand', 'firstModel', 2017, 7777, 'firstUrl'),
      new Vehicle('2', 'secondBrand', 'secondModel', 2018, 8888, 'secondUrl'),
      new Vehicle('3', 'thirdBrand', 'thirdModel', 2019, 9999, 'thirdUrl')
    ]
    const givenState = new AState().withVehicles(vehicles).build()

    const result = getters.AVAILABLE_VEHICLES(givenState)

    expect(result).toEqual(vehicles)
  })
})
