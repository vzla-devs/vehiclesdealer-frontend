import Mutations from '@/store/mutations/vehiclesMutations'
import { GET_VEHICLES, GET_VEHICLES_SUCCESS, GET_VEHICLES_FAILURE } from '@/store/mutations/mutationTypes'
import { buildStateWith } from '@tests/helpers/builderHelpers'
import testValues from '@tests/helpers/testValues'

describe('vehiclesMutations.js', () => {
  it('reset the vehicles state and set the loading state to true', () => {
    const givenState = buildStateWith({ vehiclesState: { vehicles: [{ id: 1 }], loading: false, error: { show: true, message: 'anyMessage' } } })

    Mutations[GET_VEHICLES](givenState)

    const expectedState = buildStateWith({ vehiclesState: { vehicles: [], loading: true, error: { show: false, message: '' } } })
    expect(givenState).toEqual(expectedState)
  })

  it('mutate the state with the corresponding vehicles', () => {
    const givenState = buildStateWith({ vehiclesState: { vehicles: [], loading: true } })
    const vehicles = [
      testValues.vehicle({ brand: 'firstBrand', model: 'firstModel', year: 2019, price: 9999, imageUrl: 'firstUrl' }),
      testValues.vehicle({ brand: 'secondBrand', model: 'secondModel', year: 2019, price: 9999, imageUrl: 'secondUrl' })
    ]

    Mutations[GET_VEHICLES_SUCCESS](givenState, vehicles)

    const expectedState = buildStateWith({ vehiclesState: { vehicles, loading: false } })
    expect(givenState).toEqual(expectedState)
  })

  it('mutate the state with the vehicles failure error message', () => {
    const errorMessage = 'anyErrorMessage'
    const givenState = buildStateWith({ vehiclesState: { loading: true, error: { show: false, message: '' } } })

    Mutations[GET_VEHICLES_FAILURE](givenState, errorMessage)

    const expectedState = buildStateWith({ vehiclesState: { loading: false, error: { show: true, message: errorMessage } } })
    expect(givenState).toEqual(expectedState)
  })
})
