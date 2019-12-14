import mutations from '@/store/mutations/applicationMutations'
import { buildStateWith } from '@tests/helpers/builderHelpers'
import { MESSAGE_TYPES } from '@/constants/enums'
import {
  SET_APPLICATION_LOADING,
  ADD_APPLICATION_MESSAGE,
  REMOVE_APPLICATION_MESSAGE
} from '@/store/mutations/mutationTypes'

describe('applicationMutations.js', () => {
  it('sets the loading state', () => {
    const givenState = buildStateWith({ loading: false })

    mutations[SET_APPLICATION_LOADING](givenState, true)

    const expectedState = buildStateWith({ loading: true })
    expect(givenState).toEqual(expectedState)
  })

  describe('when managing messages', () => [
    {
      messageTypeName: 'an error',
      messageType: MESSAGE_TYPES.ERROR
    },
    {
      messageTypeName: 'a notification',
      messageType: MESSAGE_TYPES.NOTIFICATION
    }
  ].forEach(({ messageTypeName, messageType }) => {
    it(`adds ${messageTypeName} message to the state`, () => {
      const givenState = buildStateWith({
        messages: { [messageType]: ['anyMessage'] }
      })

      const newMessage = 'anyNewMessage'
      mutations[ADD_APPLICATION_MESSAGE](givenState, { type: messageType, message: newMessage })

      const expectedState = buildStateWith({
        messages: { [messageType]: ['anyMessage', newMessage] }
      })
      expect(givenState).toMatchObject(expectedState)
    })

    it(`removes ${messageTypeName} message from the state`, () => {
      const givenState = buildStateWith({
        messages: { [messageType]: ['anyMessage', 'anyOtherMessage'] }
      })

      mutations[REMOVE_APPLICATION_MESSAGE](givenState, messageType)

      const expectedState = buildStateWith({
        messages: { [messageType]: ['anyMessage'] }
      })
      expect(givenState).toMatchObject(expectedState)
    })
  }))
})
