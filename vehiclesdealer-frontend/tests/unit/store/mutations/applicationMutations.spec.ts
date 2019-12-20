import mutations from '@/store/mutations/applicationMutations'
import { AState } from '@tests/builders/stateBuilder'
import { ErrorMessage } from '@/store/models/errorMessage'
import { Message } from '@/store/types/message'
import { Mutation } from '@/store/mutations/types'
import { NotificationMessage } from '@/store/models/notificationMessage'

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
      const messages = [new ErrorMessage('aMessage')]
      const state = new AState().withErrorMessages(messages).build()
  
      const newMessage = new ErrorMessage('aNewMessage')
      mutations[Mutation.ADD_APPLICATION_MESSAGE](state, newMessage)
  
      const expectedMessages = [new ErrorMessage('aMessage'), new ErrorMessage('aNewMessage')]
      const expectedState = new AState().withErrorMessages(expectedMessages).build()
      expect(state).toMatchObject(expectedState)
    })
  
    it('removes an error message from the state', () => {
      const messages = [new ErrorMessage('aMessage'), new ErrorMessage('anotherMessage')]
      const state = new AState().withErrorMessages(messages).build()
  
      mutations[Mutation.REMOVE_APPLICATION_MESSAGE](state, Message.Error)
  
      const expectedState = new AState().withErrorMessages([new ErrorMessage('aMessage')]).build()
      expect(state).toMatchObject(expectedState)
    })

    it('adds a notification message to the state', () => {
      const messages = [new NotificationMessage('aMessage')]
      const state = new AState().withNotificationMessages(messages).build()
  
      const newMessage = new NotificationMessage('aNewMessage')
      mutations[Mutation.ADD_APPLICATION_MESSAGE](state, newMessage)
  
      const expectedMessages = [new NotificationMessage('aMessage'), new NotificationMessage('aNewMessage')]
      const expectedState = new AState().withNotificationMessages(expectedMessages).build()
      expect(state).toMatchObject(expectedState)
    })

    it('removes a notification message from the state', () => {
      const messages = [new NotificationMessage('aMessage'), new NotificationMessage('anotherMessage')]
      const state = new AState().withNotificationMessages(messages).build()
  
      mutations[Mutation.REMOVE_APPLICATION_MESSAGE](state, Message.Notification)
  
      const expectedState = new AState().withNotificationMessages([new NotificationMessage('aMessage')]).build()
      expect(state).toMatchObject(expectedState)
    })
  })
})
