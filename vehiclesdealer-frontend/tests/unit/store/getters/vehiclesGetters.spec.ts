import getters from '@/store/getters/vehiclesGetters'
import { AState } from '@tests/builders/stateBuilder'
import { Vehicle } from '@/store/interfaces/vehicle'
import { TestCase } from '@tests/interfaces/testCase'

describe('vehiclesGetters.ts', () => {
  const firstVehicle: Vehicle = { id: '1', brand: 'firstBrand', model: 'firstModel', year: 2020, price: 7777, imageUrl: 'firstUrl' }
  const secondVehicle: Vehicle = { id: '2', brand: 'secondBrand', model: 'secondModel', year: 2019, price: 8888, imageUrl: 'secondUrl' }
  const thirdVehicle: Vehicle = { id: '3', brand: 'thirdBrand', model: 'thirdModel', year: 2018, price: 9999, imageUrl: 'thirdUrl' }

  describe('when getting the available vehicles', () => {
    it('gets the available vehicles from the state', () => {
      const firstVehicle: Vehicle = { id: '1', brand: 'firstBrand', model: 'firstModel', year: 2020, price: 7777, imageUrl: 'firstUrl' }
      const secondVehicle: Vehicle = { id: '2', brand: 'secondBrand', model: 'secondModel', year: 2019, price: 8888, imageUrl: 'secondUrl' }
      const thirdVehicle: Vehicle = { id: '3', brand: 'thirdBrand', model: 'thirdModel', year: 2018, price: 9999, imageUrl: 'thirdUrl' }
      const vehicles = [ firstVehicle, secondVehicle, thirdVehicle ]
      const state = new AState().withVehicles(vehicles).build()

      const result = getters.AVAILABLE_VEHICLES(state)

      expect(result).toEqual(vehicles)
    })
  })

  describe('when getting a vehicle', () => {
    const firstTestCase: TestCase = { vehicle: firstVehicle, testSuffixName: 'and the id belongs to the first vehicle' }
    const secondTestCase: TestCase = { vehicle: secondVehicle, testSuffixName: 'and the id belongs to the second vehicle' }
    const thirdTestCase: TestCase = { vehicle: thirdVehicle, testSuffixName: 'and the id belongs to the third vehicle' }
    const testCases = [ firstTestCase, secondTestCase, thirdTestCase ]

    testCases.forEach(testCase => {
      it(`gets the vehicle with the corresponding id from the state ${testCase.testSuffixName}`, () => {
        const vehicles = [ firstVehicle, secondVehicle, thirdVehicle ]
        const state = new AState().withVehicles(vehicles).build()

        const result = getters.VEHICLE(state)(testCase.vehicle.id)

        expect(result).toEqual(testCase.vehicle)
      })
    })
  })
})
