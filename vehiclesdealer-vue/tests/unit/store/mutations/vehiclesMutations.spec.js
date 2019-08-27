import Mutations from '@/store/mutations/vehiclesMutations'
import { SET_VEHICLES } from '@/store/mutations/mutationTypes'
import { buildStateWith } from '@tests/helpers/builderHelpers'
import testValues from '@tests/helpers/testValues'

describe('vehiclesMutations.js', () => {
  it('mutates the state with vehicles', () => {
    const givenState = buildStateWith({ vehicles: [] })
    const givenVehicles = [
      testValues.vehicle({ brand: 'firstBrand', model: 'firstModel', year: 2019, price: 9999, imageUrl: 'firstUrl' }),
      testValues.vehicle({ brand: 'secondBrand', model: 'secondModel', year: 2019, price: 9999, imageUrl: 'secondUrl' })
    ]

    Mutations[SET_VEHICLES](givenState, givenVehicles)

    const expectedState = buildStateWith({ vehicles: givenVehicles })
    expect(givenState).toEqual(expectedState)
  })
})
