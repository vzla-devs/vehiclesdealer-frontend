import actions from '@/store/actions/vehiclesActions'
import { GET_VEHICLES, SHOW_MESSAGE } from '@/store/actions/actionTypes'
import { SET_VEHICLES, SET_APPLICATION_LOADING } from '@/store/mutations/mutationTypes'
import { VehiclesClient } from '@/clients/clientsFactory'
import { resolvedPromise, rejectedPromise } from '@tests/helpers/testHelpers'
import testValues from '@tests/helpers/testValues'
import { MESSAGE_TYPES } from '@/constants/enums'

describe('vehiclesActions.js', () => {
  describe('when getting vehicles from the API', () => {
    it('commits the corresponding mutation after a successful response', async () => {
      const context = { commit: jest.fn(), dispatch: jest.fn() }
      const vehicles = [ testValues.vehicle({ id: '1' }), testValues.vehicle({ id: '2' }) ]
      VehiclesClient.get = jest.fn(() => resolvedPromise({ data: vehicles }))

      const returnedPromise = actions[GET_VEHICLES](context)

      expect(VehiclesClient.get).toHaveBeenCalled()
      expect(context.commit).toHaveBeenCalledWith(SET_APPLICATION_LOADING, true)
      await returnedPromise
      expect(context.commit).toHaveBeenCalledWith(SET_VEHICLES, vehicles)
      expect(context.commit).toHaveBeenCalledWith(SET_APPLICATION_LOADING, false)
      expect(context.dispatch).not.toHaveBeenCalledWith(SHOW_MESSAGE)
    })

    it('does not commit the corresponding mutation and show an error message after a failed response', async () => {
      const context = { commit: jest.fn(), dispatch: jest.fn() }
      VehiclesClient.get = jest.fn(() => rejectedPromise())

      const returnedPromise = actions[GET_VEHICLES](context)

      expect(VehiclesClient.get).toHaveBeenCalled()
      expect(context.commit).toHaveBeenCalledWith(SET_APPLICATION_LOADING, true)
      await returnedPromise
      expect(context.commit).toHaveBeenCalledWith(SET_APPLICATION_LOADING, false)
      expect(context.commit).not.toHaveBeenCalledWith(SET_VEHICLES)
      expect(context.dispatch).toHaveBeenCalledWith(SHOW_MESSAGE, { type: MESSAGE_TYPES.ERROR, message: 'ha ocurrido un error' })
    })
  })
})
