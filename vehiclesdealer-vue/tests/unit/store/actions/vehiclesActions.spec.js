import vehiclesActions from '@/store/actions/vehiclesActions'
import { GET_VEHICLES } from '@/store/actions/actionsTypes'
import { SET_VEHICLES } from '@/store/mutations/mutationsTypes'
import { GET_VEHICLES_URL } from '@/constants/serverRoutes'
import axios from 'axios'

jest.mock('axios')

describe('vehiclesActions.js', () => {
  let mockedContext

  beforeEach(() => {
    mockedContext = { 'commit': jest.fn() }
  })

  describe('getting vehicles from the API', () => {
    it('should commit the corresponding mutation after a successful response', async () => {
      const vehicles = [
        givenAVehicleFromAPI({ brand: 'anyBrand', model: 'anyModel', year: 2019, price: 9999, imageUrl: 'anyUrl' })
      ]
      const resolvedPromise = Promise.resolve({ data: vehicles })
      mockGetImplementation(resolvedPromise)

      const promise = vehiclesActions[GET_VEHICLES](mockedContext)

      await promise
      expect(axios.get).toHaveBeenCalledWith(GET_VEHICLES_URL)
      expect(mockedContext.commit).toHaveBeenCalledWith(SET_VEHICLES, vehicles)
    })

    it('should not commit the corresponding mutation after a failed response and return the error', async () => {
      const reason = 'error'
      const rejectedPromise = Promise.reject(reason)
      mockGetImplementation(rejectedPromise)

      const promise = vehiclesActions[GET_VEHICLES](mockedContext)

      const expectedResponse = await promise
      expect(axios.get).toHaveBeenCalledWith(GET_VEHICLES_URL)
      expect(mockedContext.commit).not.toHaveBeenCalled()
      expect(expectedResponse).toBe(reason)
    })
  })

  function givenAVehicleFromAPI ({ brand, model, year, price, imageUrl }) {
    return { brand, model, year, price, imageUrl }
  }

  function mockGetImplementation (promise) {
    axios.get.mockImplementation(() => promise)
  }
})
