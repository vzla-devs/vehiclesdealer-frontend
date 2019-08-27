import Actions from '@/store/actions/vehiclesActions'
import { GET_VEHICLES, SHOW_MESSAGE } from '@/store/actions/actionTypes'
import { SET_VEHICLES, SET_LOADING, RESET_LOADING } from '@/store/mutations/mutationTypes'
import { VehiclesClient } from '@/clients/clientsFactory'
import { resolvedPromise, rejectedPromise } from '@tests/helpers/testHelpers'
import testValues from '@tests/helpers/testValues'
import { MESSAGE_TYPES } from '@/constants/enums'

describe('vehiclesActions.js', () => {
  describe('when getting vehicles from the API', () => {
    it('commits the corresponding mutation after a successful response', async () => {
      const commit = jest.fn()
      const vehicles = [ testValues.vehicle({ id: '1' }), testValues.vehicle({ id: '2' }) ]
      VehiclesClient.get = jest.fn(() => resolvedPromise({ data: vehicles }))

      const returnedPromise = Actions[GET_VEHICLES]({ commit })

      expect(commit).toHaveBeenCalledWith(SET_LOADING)
      expect(VehiclesClient.get).toHaveBeenCalled()
      await returnedPromise
      expect(commit).toHaveBeenCalledWith(RESET_LOADING)
      expect(commit).toHaveBeenCalledWith(SET_VEHICLES, vehicles)
    })

    it('does not commit the corresponding mutation and show an error message after a failed response', async () => {
      const commit = jest.fn()
      const dispatch = jest.fn()
      const reason = 'error'
      VehiclesClient.get = jest.fn(() => rejectedPromise(reason))

      const returnedPromise = Actions[GET_VEHICLES]({ commit, dispatch })

      expect(commit).toHaveBeenCalledWith(SET_LOADING)
      expect(VehiclesClient.get).toHaveBeenCalled()
      const response = await returnedPromise
      expect(commit).toHaveBeenCalledWith(RESET_LOADING)
      expect(commit).not.toHaveBeenCalledWith(SET_VEHICLES)
      expect(dispatch).toHaveBeenCalledWith(SHOW_MESSAGE, { type: MESSAGE_TYPES.ERROR, message: 'Ha ocurrido un error' })
      expect(response).toBe(reason)
    })
  })
})
