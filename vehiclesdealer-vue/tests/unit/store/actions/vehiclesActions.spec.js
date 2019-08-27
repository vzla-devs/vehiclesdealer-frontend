import Actions from '@/store/actions/vehiclesActions'
import { GET_VEHICLES, SHOW_MESSAGE } from '@/store/actions/actionTypes'
import { SET_VEHICLES } from '@/store/mutations/mutationTypes'
import { VehiclesClient } from '@/clients/clientsFactory'
import { resolvedPromise, rejectedPromise } from '@tests/helpers/testHelpers'
import testValues from '@tests/helpers/testValues'
import { MESSAGE_TYPES } from '@/constants/enums'

describe('vehiclesActions.js', () => {
  describe('getting vehicles from the API', () => {
    it('should commit the corresponding mutation after a successful response', async () => {
      const commit = jest.fn()
      const vehicles = [ testValues.vehicle({ id: '1' }), testValues.vehicle({ id: '2' }) ]
      VehiclesClient.get = jest.fn(() => resolvedPromise({ data: vehicles }))

      await Actions[GET_VEHICLES]({ commit })

      expect(VehiclesClient.get).toHaveBeenCalled()
      expect(commit).toHaveBeenCalledWith(SET_VEHICLES, vehicles)
    })

    it('should not commit the corresponding mutation and show an error message after a failed response', async () => {
      const commit = jest.fn()
      const dispatch = jest.fn()
      const reason = 'error'
      VehiclesClient.get = jest.fn(() => rejectedPromise(reason))

      const response = await Actions[GET_VEHICLES]({ commit, dispatch })

      expect(VehiclesClient.get).toHaveBeenCalled()
      expect(commit).not.toHaveBeenCalledWith(SET_VEHICLES)
      expect(dispatch).toHaveBeenCalledWith(SHOW_MESSAGE, { type: MESSAGE_TYPES.ERROR, message: 'Ha ocurrido un error' })
      expect(response).toBe(reason)
    })
  })
})
