import messagesActions from '@/store/actions/messagesActions'
import { SHOW_MESSAGE, CLEAR_MESSAGE } from '@/store/actions/actionsTypes'
import { SET_MESSAGE, RESET_MESSAGE } from '@/store/mutations/mutationsTypes'
import messagesTypes from '@/enums/messagesTypes'

describe('messagesActions.js', () => {
  let mockedContext

  beforeEach(() => {
    mockedContext = { 'commit': jest.fn() }
  })

  test('should commit the corresponding mutation to show an error message', () => {
    const givenPayload = {
      type: messagesTypes().error,
      message: 'anyMessage'
    }

    messagesActions[SHOW_MESSAGE](mockedContext, givenPayload)

    expect(mockedContext.commit).toHaveBeenCalledWith(SET_MESSAGE, givenPayload)
  })

  test('should commit the corresponding mutation to clear an error message', () => {
    const givenType = messagesTypes().error

    messagesActions[CLEAR_MESSAGE](mockedContext, givenType)

    expect(mockedContext.commit).toHaveBeenCalledWith(RESET_MESSAGE, givenType)
  })
})
