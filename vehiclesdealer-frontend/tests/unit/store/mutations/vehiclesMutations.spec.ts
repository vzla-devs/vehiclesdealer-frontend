import mutations from '@/store/mutations/vehiclesMutations'
import { AState } from '@tests/builders/stateBuilder'
import { Mutation } from '@/store/mutations/types'
import { Vehicle } from '@/store/interfaces/vehicle'

describe('vehiclesMutations.js', () => {
  it('sets the vehicles', () => {
    const state = new AState().withVehicles([]).build()
    const firstVehicle: Vehicle = { id: '1', brand: 'firstBrand', model: 'firstModel', year: 2020, price: 9999, imageUrl: 'firstUrl' }
    const secondVehicle: Vehicle = { id: '2', brand: 'secondBrand', model: 'secondModel', year: 2019, price: 9999, imageUrl: 'secondUrl' }
    const vehicles = [ firstVehicle, secondVehicle ]

    mutations[Mutation.SET_VEHICLES](state, vehicles)

    const expectedState = new AState().withVehicles(vehicles).build()
    expect(state).toEqual(expectedState)
  })
})
