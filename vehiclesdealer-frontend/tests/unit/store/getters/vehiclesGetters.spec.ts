import getters from '@/store/getters/vehiclesGetters'
import { AState } from '@tests/builders/stateBuilder'
import { Vehicle } from '@/store/interfaces/vehicle'

describe('vehiclesGetters.ts', () => {
  it('gets the vehicles from the state', () => {
    const firstVehicle: Vehicle = { id: '1', brand: 'firstBrand', model: 'firstModel', year: 2020, price: 7777, imageUrl: 'firstUrl' }
    const secondVehicle: Vehicle = { id: '2', brand: 'secondBrand', model: 'secondModel', year: 2019, price: 8888, imageUrl: 'secondUrl' }
    const thirdVehicle: Vehicle = { id: '3', brand: 'thirdBrand', model: 'thirdModel', year: 2018, price: 9999, imageUrl: 'thirdUrl' }
    const vehicles = [ firstVehicle, secondVehicle, thirdVehicle ]
    const state = new AState().withVehicles(vehicles).build()

    const result = getters.AVAILABLE_VEHICLES(state)

    expect(result).toEqual(vehicles)
  })

  it('gets the vehicle with the corresponding id from the state', () => {
    const firstVehicle: Vehicle = { id: '1', brand: 'firstBrand', model: 'firstModel', year: 2020, price: 7777, imageUrl: 'firstUrl' }
    const secondVehicle: Vehicle = { id: '2', brand: 'secondBrand', model: 'secondModel', year: 2019, price: 8888, imageUrl: 'secondUrl' }
    const thirdVehicle: Vehicle = { id: '3', brand: 'thirdBrand', model: 'thirdModel', year: 2018, price: 9999, imageUrl: 'thirdUrl' }
    const vehicles = [ firstVehicle, secondVehicle, thirdVehicle ]
    const state = new AState().withVehicles(vehicles).build()

    const result = getters.VEHICLE(state)(secondVehicle.id)

    expect(result).toEqual(secondVehicle)
  })
})
