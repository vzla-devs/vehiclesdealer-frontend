import { TryThisAction } from '@/store/actions/actionDecorators'
import { resolvedPromise, rejectedPromise } from '@tests/helpers/promiseHelpers'
import { Mutation } from '@/store/mutations/types'

describe('actionDecorators.ts', () => {
  it('calls the passed in action and changes the application loading state correctly', async () => {
    const givenContext = getMockedContext()
    const givenAction = (givenContext) => resolvedPromise()

    const returnedPromise = TryThisAction(givenAction)(givenContext)

    expect(givenContext.commit).toHaveBeenCalledWith(Mutation.SET_APPLICATION_LOADING, true)
    await returnedPromise
    expect(givenContext.commit).toHaveBeenCalledWith(Mutation.SET_APPLICATION_LOADING, false)
  })

  function getMockedContext (): any {
    return { commit: jest.fn(), dispatch: jest.fn() }
  }
})
