import getters from '@/store/getters/vehiclesGetters'
import { AState } from '@tests/builders/stateBuilder'
import { Vehicle } from '@/store/interfaces/vehicle'
import { TestCase } from '@tests/interfaces/testCase'

describe('vehiclesGetters.ts', () => {
  const firstVehicle: Vehicle = { id: '1', brand: 'firstBrand', model: 'firstModel', year: 2020, price: 7777, imageUrl: 'firstUrl' }
  const secondVehicle: Vehicle = { id: '2', brand: 'secondBrand', model: 'secondModel', year: 2019, price: 8888, imageUrl: 'secondUrl' }
  const thirdVehicle: Vehicle = { id: '3', brand: 'thirdBrand', model: 'thirdModel', year: 2018, price: 9999, imageUrl: 'thirdUrl' }

  it('gets all the available vehicles', () => {
    const vehicles = [ firstVehicle, secondVehicle, thirdVehicle ]
    const state = new AState().withVehicles(vehicles).build()

    const result = getters.AVAILABLE_VEHICLES(state)

    expect(result).toEqual(vehicles)
  })

  describe('when getting a single vehicle', () => {
    const firstTestCase: TestCase = {
      name: 'gets the vehicle with the corresponding id and the id belongs to the first vehicle',
      id: firstVehicle.id,
      vehicle: firstVehicle
    }
    const secondTestCase: TestCase = {
      name: 'gets the vehicle with the corresponding id and the id belongs to the second vehicle',
      id: secondVehicle.id,
      vehicle: secondVehicle
    }
    const thirdTestCase: TestCase = {
      name: 'gets the vehicle with the corresponding id and the id belongs to the third vehicle',
      id: thirdVehicle.id,
      vehicle: thirdVehicle
    }
    const fourthTestCase: TestCase = {
      name: 'gets undefined for an id that does not belong to any vehicle',
      id: 'anyOtherVehicleId',
      vehicle: undefined
    }
    const testCases = [ firstTestCase, secondTestCase, thirdTestCase, fourthTestCase ]

    testCases.forEach(testCase => {
      it(testCase.name, () => {
        const vehicles = [ firstVehicle, secondVehicle, thirdVehicle ]
        const state = new AState().withVehicles(vehicles).build()

        const result = getters.VEHICLE(state)(testCase.id)

        expect(result).toEqual(testCase.vehicle)
      })
    })
  })
})
