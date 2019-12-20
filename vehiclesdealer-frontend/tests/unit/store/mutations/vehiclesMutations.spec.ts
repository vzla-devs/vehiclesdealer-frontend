import mutations from '@/store/mutations/vehiclesMutations'
import { AState } from '@tests/builders/stateBuilder'
import { Mutation } from '@/store/mutations/types'
import { Vehicle } from '@/store/models/vehicle'

describe('vehiclesMutations.js', () => {
  it('sets the vehicles', () => {
    const state = new AState().withVehicles([]).build()
    const vehicles = [
      new Vehicle('1', 'firstBrand', 'firstModel', 2019, 9999, 'firstUrl'),
      new Vehicle('2', 'secondBrand', 'secondModel', 2019, 9999, 'secondUrl')
    ]

    mutations[Mutation.SET_VEHICLES](state, vehicles)

    const expectedState = new AState().withVehicles(vehicles).build()
    expect(state).toEqual(expectedState)
  })
})
