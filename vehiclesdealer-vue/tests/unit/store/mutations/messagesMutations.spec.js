import messagesMutations from '@/store/mutations/messagesMutations'
import { SET_MESSAGE } from '@/store/mutations/mutationsTypes'
import messagesTypes from '@/enums/messagesTypes'

describe('messagesMutations.js', () => {
  test('should mutate the state with a new error message', () => {
    const givenState = { messages: { error: { show: false, message: '' } } }
    const type = messagesTypes().error
    const message = 'anyMessage'

    messagesMutations[SET_MESSAGE](givenState, { type, message })

    const expectedState = { messages: { error: { show: true, message } } }
    expect(givenState).toEqual(expectedState)
  })
})
