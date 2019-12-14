import mutations from '@/store/mutations/vehiclesMutations'
import { AState } from '@tests/helpers/builderHelpers'
import testValues from '@tests/helpers/testValues'
import { SET_VEHICLES } from '@/store/mutations/mutationTypes'

describe('vehiclesMutations.js', () => {
  it('sets the vehicles', () => {
    const givenState = AState().withValue({ vehicles: [] }).build()
    const vehicles = [
      testValues.vehicle({ brand: 'firstBrand', model: 'firstModel', year: 2019, price: 9999, imageUrl: 'firstUrl' }),
      testValues.vehicle({ brand: 'secondBrand', model: 'secondModel', year: 2019, price: 9999, imageUrl: 'secondUrl' })
    ]

    mutations[SET_VEHICLES](givenState, vehicles)

    const expectedState = AState().withValue({ vehicles }).build()
    expect(givenState).toEqual(expectedState)
  })
})
