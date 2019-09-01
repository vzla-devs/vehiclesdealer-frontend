import Actions from '@/store/actions/vehiclesActions'
import { GET_VEHICLES } from '@/store/actions/actionTypes'
import { SET_VEHICLES_REQUEST, SET_VEHICLES_SUCCESS, SET_VEHICLES_FAILURE } from '@/store/mutations/mutationTypes'
import { VehiclesClient } from '@/clients/clientsFactory'
import { resolvedPromise, rejectedPromise } from '@tests/helpers/testHelpers'
import testValues from '@tests/helpers/testValues'

describe('vehiclesActions.js', () => {
  describe('when getting vehicles from the API', () => {
    it('commits the corresponding mutation after a successful response', async () => {
      const commit = jest.fn()
      const vehicles = [ testValues.vehicle({ id: '1' }), testValues.vehicle({ id: '2' }) ]
      VehiclesClient.get = jest.fn(() => resolvedPromise({ data: vehicles }))

      const returnedPromise = Actions[GET_VEHICLES]({ commit })

      expect(commit).toHaveBeenCalledWith(SET_VEHICLES_REQUEST)
      expect(VehiclesClient.get).toHaveBeenCalled()
      await returnedPromise
      expect(commit).toHaveBeenCalledWith(SET_VEHICLES_SUCCESS, vehicles)
    })

    it('does not commit the corresponding mutation and show an error message after a failed response', async () => {
      const commit = jest.fn()
      VehiclesClient.get = jest.fn(() => rejectedPromise())

      await Actions[GET_VEHICLES]({ commit })

      expect(commit).toHaveBeenCalledWith(SET_VEHICLES_REQUEST)
      expect(VehiclesClient.get).toHaveBeenCalled()
      expect(commit).toHaveBeenCalledWith(SET_VEHICLES_FAILURE, 'Ha ocurrido un error')
    })
  })
})
