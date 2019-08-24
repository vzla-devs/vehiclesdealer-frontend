import Mutations from '@/store/mutations/vehiclesMutations'
import { SET_VEHICLES } from '@/store/mutations/mutationTypes'
import { buildState } from '@tests/helpers/builderHelpers'

describe('vehiclesMutations.js', () => {
  it('should mutate the state with vehicles', () => {
    const givenState = buildState({ vehicles: [] })
    const givenVehicles = [
      givenAVehicle({ brand: 'firstBrand', model: 'firstModel', year: 2019, price: 9999, imageUrl: 'firstUrl' }),
      givenAVehicle({ brand: 'secondBrand', model: 'secondModel', year: 2019, price: 9999, imageUrl: 'secondUrl' })
    ]

    Mutations[SET_VEHICLES](givenState, givenVehicles)

    const expectedState = buildState({ vehicles: givenVehicles })
    expect(givenState).toEqual(expectedState)
  })

  function givenAVehicle ({ brand, model, year, price, imageUrl }) {
    return { brand, model, year, price, imageUrl }
  }
})
