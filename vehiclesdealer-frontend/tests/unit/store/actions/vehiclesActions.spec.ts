import actions from '@/store/actions/vehiclesActions'
import { VehiclesClient } from '@/clients/clientsFactory'
import { resolvedPromise, rejectedPromise } from '@tests/helpers/testHelpers'
import { TestValues } from '@tests/helpers/testValues'
import { Action } from '@/store/actions/types'
import { Mutation } from '@/store/mutations/types'
import { ApplicationMessage } from '@/store/models/applicationMessage'

describe('vehiclesActions.js', () => {
  describe('when getting vehicles from the API', () => {
    it('commits the corresponding mutation after a successful response', async () => {
      const context = { commit: jest.fn(), dispatch: jest.fn() }
      const vehicles = [ TestValues.vehicle('1'), TestValues.vehicle('2') ]
      VehiclesClient.get = jest.fn(() => resolvedPromise({ data: vehicles }))

      const returnedPromise = actions[Action.GET_VEHICLES](context)

      expect(VehiclesClient.get).toHaveBeenCalled()
      expect(context.commit).toHaveBeenCalledWith(Mutation.SET_APPLICATION_LOADING, true)
      await returnedPromise
      expect(context.commit).toHaveBeenCalledWith(Mutation.SET_VEHICLES, vehicles)
      expect(context.commit).toHaveBeenCalledWith(Mutation.SET_APPLICATION_LOADING, false)
      expect(context.dispatch).not.toHaveBeenCalledWith(Action.SHOW_MESSAGE)
    })

    it('does not commit the corresponding mutation and show an error message after a failed response', async () => {
      const context = { commit: jest.fn(), dispatch: jest.fn() }
      VehiclesClient.get = jest.fn(() => rejectedPromise())

      const returnedPromise = actions[Action.GET_VEHICLES](context)

      expect(VehiclesClient.get).toHaveBeenCalled()
      expect(context.commit).toHaveBeenCalledWith(Mutation.SET_APPLICATION_LOADING, true)
      await returnedPromise
      expect(context.commit).toHaveBeenCalledWith(Mutation.SET_APPLICATION_LOADING, false)
      expect(context.commit).not.toHaveBeenCalledWith(Mutation.SET_VEHICLES)
      const expectedErrorMessage: ApplicationMessage = { type: 'error', message: 'ha ocurrido un error' }
      expect(context.dispatch).toHaveBeenCalledWith(Action.SHOW_MESSAGE, expectedErrorMessage)
    })
  })
})
