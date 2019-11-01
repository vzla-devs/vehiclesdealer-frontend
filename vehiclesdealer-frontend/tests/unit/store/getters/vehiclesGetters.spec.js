import Getters from '@/store/getters/vehiclesGetters'
import { AVAILABLE_VEHICLES, LOADING_VEHICLES } from '@/store/getters/getterTypes'
import { buildStateWith } from '@tests/helpers/builderHelpers'
import testValues from '@tests/helpers/testValues'

describe('vehiclesGetters.js', () => {
  it('gets the vehicles from the state', () => {
    const vehicles = [
      testValues.vehicle({ id: '1', brand: 'firstBrand', model: 'firstModel' }),
      testValues.vehicle({ id: '2', brand: 'secondBrand', model: 'secondModel' }),
      testValues.vehicle({ id: '3', brand: 'thirdBrand', model: 'thirdModel' })
    ]
    const givenState = buildStateWith({ vehiclesState: { vehicles } })

    const vehiclesFromGetter = Getters[AVAILABLE_VEHICLES](givenState)

    expect(vehiclesFromGetter).toEqual(vehicles)
  })

  it('gets the vehicles loading state', () => {
    const givenState = buildStateWith({ vehiclesState: { loading: true } })

    const result = Getters[LOADING_VEHICLES](givenState)

    expect(result).toBe(true)
  })
})
