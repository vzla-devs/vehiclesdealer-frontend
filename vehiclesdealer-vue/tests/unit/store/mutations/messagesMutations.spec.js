import messagesMutations from '@/store/mutations/messagesMutations'
import { SET_MESSAGE, RESET_MESSAGE } from '@/store/mutations/mutationsTypes'
import messagesTypes from '@/enums/messagesTypes'

describe('messagesMutations.js', () => {
  test('should mutate the state with a new error message', () => {
    const type = messagesTypes().error
    const givenState = { messages: aMessageFromState({ type }) }
    const givenMessage = 'anyMessage'

    messagesMutations[SET_MESSAGE](givenState, { type, message: givenMessage })

    const expectedState = { messages: aMessageFromState({ type, show: true, message: givenMessage }) }
    expect(givenState).toEqual(expectedState)
  })

  test('should mutate the state resetting an error message', () => {
    const type = messagesTypes().error
    const givenState = { messages: aMessageFromState({ type, show: true, message: 'anyMessage' }) }

    messagesMutations[RESET_MESSAGE](givenState, type)

    const expectedState = { messages: aMessageFromState({ type, show: false, message: '' }) }
    expect(givenState).toEqual(expectedState)
  })

  function aMessageFromState ({ type, show = false, message = '' }) {
    return { [type]: { show, message } }
  }
})
