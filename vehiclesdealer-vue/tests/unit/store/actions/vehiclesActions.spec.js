import Actions from '@/store/actions/vehiclesActions'
import { GET_VEHICLES } from '@/store/actions/actionTypes'
import { SET_VEHICLES } from '@/store/mutations/mutationTypes'
import { VehiclesClient } from '@/clients/clientsFactory'
import { mockedContext, resolvedPromise, rejectedPromise } from '@tests/helpers/testHelpers'
import testValues from '@tests/helpers/testValues'

describe('vehiclesActions.js', () => {
  describe('getting vehicles from the API', () => {
    it('should commit the corresponding mutation after a successful response', async () => {
      const context = mockedContext()
      const vehicles = [ testValues.vehicle({ id: '1' }), testValues.vehicle({ id: '2' }) ]
      VehiclesClient.get = jest.fn(() => resolvedPromise({ data: vehicles }))

      await Actions[GET_VEHICLES](context)

      expect(VehiclesClient.get).toHaveBeenCalled()
      expect(context.commit).toHaveBeenCalledWith(SET_VEHICLES, vehicles)
    })

    it('should not commit the corresponding mutation after a failed response and return the error', async () => {
      const context = mockedContext()
      const reason = 'error'
      VehiclesClient.get = jest.fn(() => rejectedPromise(reason))

      const response = await Actions[GET_VEHICLES](context)

      expect(VehiclesClient.get).toHaveBeenCalled()
      expect(context.commit).not.toHaveBeenCalled()
      expect(response).toBe(reason)
    })
  })
})
