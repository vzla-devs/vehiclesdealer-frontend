import messagesActions from '@/store/actions/messagesActions'
import { SHOW_MESSAGE } from '@/store/actions/actionsTypes'
import { SET_MESSAGE } from '@/store/mutations/mutationsTypes'
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
})
