import getters from '@/store/getters/vehiclesGetters'
import { AVAILABLE_VEHICLES } from '@/store/getters/getterTypes'
import { AState } from '@tests/builders/stateBuilder'
import testValues from '@tests/helpers/testValues'

describe('vehiclesGetters.js', () => {
  it('gets the vehicles from the state', () => {
    const vehicles = [
      testValues.vehicle({ id: '1', brand: 'firstBrand', model: 'firstModel' }),
      testValues.vehicle({ id: '2', brand: 'secondBrand', model: 'secondModel' }),
      testValues.vehicle({ id: '3', brand: 'thirdBrand', model: 'thirdModel' })
    ]
    const givenState = new AState().withVehicles(vehicles).build()

    const result = getters[AVAILABLE_VEHICLES](givenState)

    expect(result).toEqual(vehicles)
  })
})
