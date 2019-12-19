import mutations from '@/store/mutations/vehiclesMutations'
import { AState } from '@tests/builders/stateBuilder'
import testValues from '@tests/helpers/testValues'
import { Mutation } from '@/store/mutations/types'

describe('vehiclesMutations.js', () => {
  it('sets the vehicles', () => {
    const givenState = new AState().withVehicles([]).build()
    const vehicles = [
      testValues.vehicle({ brand: 'firstBrand', model: 'firstModel', year: 2019, price: 9999, imageUrl: 'firstUrl' }),
      testValues.vehicle({ brand: 'secondBrand', model: 'secondModel', year: 2019, price: 9999, imageUrl: 'secondUrl' })
    ]

    mutations[Mutation.SET_VEHICLES](givenState, vehicles)

    const expectedState = new AState().withVehicles(vehicles).build()
    expect(givenState).toEqual(expectedState)
  })
})
