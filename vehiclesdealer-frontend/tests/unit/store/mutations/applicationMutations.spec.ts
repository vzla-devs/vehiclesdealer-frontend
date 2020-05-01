import mutations from '@/store/mutations/applicationMutations'
import { AState } from '@tests/builders/stateBuilder'
import { ApplicationMessage } from '@/store/models/applicationMessage'
import { Mutation } from '@/store/mutations/types'

describe('applicationMutations.js', () => {
  it('sets the loading state to true', () => {
    const state = new AState().withLoading(false).build()

    mutations[Mutation.SET_APPLICATION_LOADING](state, true)

    const expectedState = new AState().withLoading(true).build()
    expect(state).toEqual(expectedState)
  })

  it('sets the loading state to false', () => {
    const state = new AState().withLoading(true).build()

    mutations[Mutation.SET_APPLICATION_LOADING](state, false)

    const expectedState = new AState().withLoading(false).build()
    expect(state).toEqual(expectedState)
  })

  describe('when managing messages', () => {
    it('adds an error message to the state', () => {
      const givenMessages: Array<ApplicationMessage> = [{ message: 'aMessage', type: 'error' }]
      const state = new AState().withErrorMessages(givenMessages).build()

      const newMessage: ApplicationMessage = { message: 'aNewMessage', type: 'error' }
      mutations[Mutation.ADD_APPLICATION_MESSAGE](state, newMessage)

      const expectedState = new AState().withErrorMessages([ ...givenMessages, newMessage ]).build()
      expect(state).toMatchObject(expectedState)
    })

    it('removes an error message from the state', () => {
      const givenMessages: Array<ApplicationMessage> = [
        { type: 'error', message: 'aMessage' },
        { type: 'error', message: 'anotherMessage' }
      ]
      const state = new AState().withErrorMessages(givenMessages).build()

      mutations[Mutation.REMOVE_APPLICATION_MESSAGE](state, 'error')

      const expectedMessages: Array<ApplicationMessage> = [{ type: 'error', message: 'aMessage' }]
      const expectedState = new AState().withErrorMessages(expectedMessages).build()
      expect(state).toMatchObject(expectedState)
    })

    it('adds a notification message to the state', () => {
      const givenMessages: Array<ApplicationMessage> = [{ type: 'notification', message: 'aMessage' }]
      const state = new AState().withNotificationMessages(givenMessages).build()

      const newMessage: ApplicationMessage = { type: 'notification', message: 'aNewMessage' }
      mutations[Mutation.ADD_APPLICATION_MESSAGE](state, newMessage)

      const expectedState = new AState().withNotificationMessages([...givenMessages, newMessage]).build()
      expect(state).toMatchObject(expectedState)
    })

    it('removes a notification message from the state', () => {
      const givenMessages: Array<ApplicationMessage> = [
        { type: 'error', message: 'aMessage' },
        { type: 'error', message: 'anotherMessage' }
      ]
      const state = new AState().withNotificationMessages(givenMessages).build()

      mutations[Mutation.REMOVE_APPLICATION_MESSAGE](state, 'notification')

      const expectedMessages: Array<ApplicationMessage> = [{ type: 'notification', message: 'aMessage' }]
      const expectedState = new AState().withNotificationMessages(expectedMessages).build()
      expect(state).toMatchObject(expectedState)
    })
  })
})
