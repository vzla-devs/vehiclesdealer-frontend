import actions from '@/store/actions/vehiclesActions'
import { VehiclesClient } from '@/clients/clientsFactory'
import { resolvedPromise, rejectedPromise } from '@tests/helpers/promiseHelpers'
import { TestValues } from '@tests/helpers/testValues'
import { Action } from '@/store/actions/types'
import { Mutation } from '@/store/mutations/types'
import { ApplicationMessage } from '@/store/interfaces/applicationMessage'

describe('vehiclesActions.js', () => {
  it('calls the client to get the vehicles, stores them and returns them', async () => {
    const givenContext = getMockedContext()
    const givenVehicles = [ TestValues.vehicle('1'), TestValues.vehicle('2') ]
    mockClientGetWith(resolvedPromise({ data: givenVehicles }))

    const returnedPromise = actions[Action.GET_VEHICLES](givenContext)

    expect(VehiclesClient.get).toHaveBeenCalled()
    expect(givenContext.commit).toHaveBeenCalledWith(Mutation.SET_APPLICATION_LOADING, true)
    await returnedPromise
    expect(givenContext.commit).toHaveBeenCalledWith(Mutation.SET_VEHICLES, givenVehicles)
    expect(givenContext.commit).toHaveBeenCalledWith(Mutation.SET_APPLICATION_LOADING, false)
    expect(givenContext.dispatch).not.toHaveBeenCalledWith(Action.SHOW_MESSAGE)
  })

  it('shows an error message after getting the vehicles fails', async () => {
    const givenContext = getMockedContext()
    mockClientGetWith(rejectedPromise())

    const returnedPromise = actions[Action.GET_VEHICLES](givenContext)

    expect(VehiclesClient.get).toHaveBeenCalled()
    expect(givenContext.commit).toHaveBeenCalledWith(Mutation.SET_APPLICATION_LOADING, true)
    await returnedPromise
    expect(givenContext.commit).toHaveBeenCalledWith(Mutation.SET_APPLICATION_LOADING, false)
    expect(givenContext.commit).not.toHaveBeenCalledWith(Mutation.SET_VEHICLES)
    const expectedErrorMessage: ApplicationMessage = { type: 'error', message: 'ha ocurrido un error' }
    expect(givenContext.dispatch).toHaveBeenCalledWith(Action.SHOW_MESSAGE, expectedErrorMessage)
  })

  function getMockedContext (): any {
    return { commit: jest.fn(), dispatch: jest.fn() }
  }
  function mockClientGetWith (promise: Promise<any>): void {
    VehiclesClient.get = jest.fn(() => promise)
  }
})
