import Actions from '@/store/actions/vehiclesActions'
import { GET_VEHICLES } from '@/store/actions/actionTypes'
import { SET_VEHICLES } from '@/store/mutations/mutationTypes'
import { GET_VEHICLES_URL } from '@/constants/serverRoutes'
import { mockedContext, resolvedPromise, rejectedPromise } from '@tests/helpers/testHelpers'
import axios from 'axios'

jest.mock('axios')

describe('vehiclesActions.js', () => {
  describe('getting vehicles from the API', () => {
    it('should commit the corresponding mutation after a successful response', async () => {
      const context = mockedContext()
      const vehicles = [
        givenAVehicleFromAPI({ brand: 'anyBrand', model: 'anyModel', year: 2019, price: 9999, imageUrl: 'anyUrl' })
      ]
      mockGetImplementation(resolvedPromise({ data: vehicles }))

      const promise = Actions[GET_VEHICLES](context)

      await promise
      expect(axios.get).toHaveBeenCalledWith(GET_VEHICLES_URL)
      expect(context.commit).toHaveBeenCalledWith(SET_VEHICLES, vehicles)
    })

    it('should not commit the corresponding mutation after a failed response and return the error', async () => {
      const context = mockedContext()
      const reason = 'error'
      mockGetImplementation(rejectedPromise(reason))

      const promise = Actions[GET_VEHICLES](context)

      const expectedResponse = await promise
      expect(axios.get).toHaveBeenCalledWith(GET_VEHICLES_URL)
      expect(context.commit).not.toHaveBeenCalled()
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
