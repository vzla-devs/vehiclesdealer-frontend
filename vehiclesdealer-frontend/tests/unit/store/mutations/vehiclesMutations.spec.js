import Mutations from '@/store/mutations/vehiclesMutations'
import { buildStateWith } from '@tests/helpers/builderHelpers'
import testValues from '@tests/helpers/testValues'
import { SET_VEHICLES } from '@/store/mutations/mutationTypes'

describe('vehiclesMutations.js', () => {
  it('sets the vehicles', () => {
    const givenState = buildStateWith({ vehicles: [] })
    const vehicles = [
      testValues.vehicle({ brand: 'firstBrand', model: 'firstModel', year: 2019, price: 9999, imageUrl: 'firstUrl' }),
      testValues.vehicle({ brand: 'secondBrand', model: 'secondModel', year: 2019, price: 9999, imageUrl: 'secondUrl' })
    ]

    Mutations[SET_VEHICLES](givenState, vehicles)

    const expectedState = buildStateWith({ vehicles })
    expect(givenState).toEqual(expectedState)
  })
})
