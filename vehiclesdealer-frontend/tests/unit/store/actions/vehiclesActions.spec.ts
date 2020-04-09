import actions from '@/store/actions/vehiclesActions'
import { VehiclesClient } from '@/clients/clientsFactory'
import { resolvedPromise, rejectedPromise } from '@tests/helpers/promiseHelpers'
import { TestValues } from '@tests/helpers/testValues'
import { Action } from '@/store/actions/types'
import { Mutation } from '@/store/mutations/types'
import { ApplicationMessage } from '@/store/interfaces/applicationMessage'

describe('vehiclesActions.js', () => {
  it('calls the client to get the vehicles, stores them and returns them', async () => {
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

  it('shows an error message after getting the vehicles fails', async () => {
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
