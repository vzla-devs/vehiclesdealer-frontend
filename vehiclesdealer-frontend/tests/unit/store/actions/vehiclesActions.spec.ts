import actions from '@/store/actions/vehiclesActions'
import { VehiclesClient } from '@/clients/clientsFactory'
import { resolvedPromise, rejectedPromise } from '@tests/helpers/promiseHelpers'
import { TestValues } from '@tests/helpers/testValues'
import { Action } from '@/store/actions/types'
import { Mutation } from '@/store/mutations/types'

describe('vehiclesActions.js', () => {
  it('calls the client to get the vehicles and commits the results', async () => {
    const givenContext = getMockedContext()
    const givenVehicles = [ TestValues.vehicle('1'), TestValues.vehicle('2') ]
    mockClientGetWith(resolvedPromise({ data: givenVehicles }))

    const returnedPromise = actions[Action.GET_VEHICLES](givenContext)

    expect(VehiclesClient.get).toHaveBeenCalled()
    await returnedPromise
    expect(givenContext.commit).toHaveBeenCalledWith(Mutation.SET_VEHICLES, givenVehicles)
  })

  it('does not commit the results when getting the vehicles fails', async () => {
    const givenContext = getMockedContext()
    mockClientGetWith(rejectedPromise())

    const returnedPromise = actions[Action.GET_VEHICLES](givenContext)

    expect(VehiclesClient.get).toHaveBeenCalled()
    await returnedPromise
    expect(givenContext.commit).not.toHaveBeenCalledWith(Mutation.SET_VEHICLES)
  })

  function getMockedContext (): any {
    return { commit: jest.fn(), dispatch: jest.fn() }
  }
  
  function mockClientGetWith (promise: Promise<any>): void {
    VehiclesClient.get = jest.fn(() => promise)
  }
})
