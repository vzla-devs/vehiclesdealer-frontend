import { TryThisAction } from '@/store/actions/actionDecorators'
import { resolvedPromise, rejectedPromise } from '@tests/helpers/promiseHelpers'
import { Action } from '@/store/actions/types'
import { Mutation } from '@/store/mutations/types'
import { ApplicationMessage } from '@/store/interfaces/applicationMessage'

describe('actionDecorators.ts', () => {
  it('calls the corresponding action and changes the application loading state correctly', async () => {
    const givenContext = getMockedContext()
    const givenAction = () => resolvedPromise()

    const returnedPromise = TryThisAction(givenAction)(givenContext)

    expect(givenContext.commit).toHaveBeenCalledWith(Mutation.SET_APPLICATION_LOADING, true)
    await returnedPromise
    expect(givenContext.commit).toHaveBeenCalledWith(Mutation.SET_APPLICATION_LOADING, false)
  })

  it('calls the corresponding action and shows an error message when it fails', async () => {
    const givenContext = getMockedContext()
    const givenAction = () => rejectedPromise()

    const returnedPromise = TryThisAction(givenAction)(givenContext)

    expect(givenContext.commit).toHaveBeenCalledWith(Mutation.SET_APPLICATION_LOADING, true)
    await returnedPromise
    expect(givenContext.commit).toHaveBeenCalledWith(Mutation.SET_APPLICATION_LOADING, false)
    const expectedErrorMessage: ApplicationMessage = { type: 'error', message: 'ha ocurrido un error' }
    expect(givenContext.dispatch).toHaveBeenCalledWith(Action.SHOW_MESSAGE, expectedErrorMessage)
  })

  function getMockedContext (): any {
    return { commit: jest.fn(), dispatch: jest.fn() }
  }
})
