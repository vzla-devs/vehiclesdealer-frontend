import mutations from '@/store/mutations/applicationMutations'
import { AState } from '@tests/builders/stateBuilder'
import { ErrorMessage } from '@/store/models/errorMessage'
import { Message } from '@/store/types/message'
import { Mutation } from '@/store/mutations/types'
import { NotificationMessage } from '@/store/models/notificationMessage'

describe('applicationMutations.js', () => {
  it('sets the loading state to true', () => {
    const givenState = new AState().withLoading(false).build()

    mutations[Mutation.SET_APPLICATION_LOADING](givenState, true)

    const expectedState = new AState().withLoading(true).build()
    expect(givenState).toEqual(expectedState)
  })

  it('sets the loading state to false', () => {
    const givenState = new AState().withLoading(true).build()

    mutations[Mutation.SET_APPLICATION_LOADING](givenState, false)

    const expectedState = new AState().withLoading(false).build()
    expect(givenState).toEqual(expectedState)
  })

  describe('when managing messages', () => {
    it('adds an error message to the state', () => {
      const errorMessages = [new ErrorMessage('aMessage')]
      const givenState = new AState().withErrorMessages(errorMessages).build()
  
      const newMessage = new ErrorMessage('aNewMessage')
      mutations[Mutation.ADD_APPLICATION_MESSAGE](givenState, newMessage)
  
      const expectedErrorMessages = [new ErrorMessage('aMessage'), new ErrorMessage('aNewMessage')]
      const expectedState = new AState().withErrorMessages(expectedErrorMessages).build()
      expect(givenState).toMatchObject(expectedState)
    })
  
    it('removes an error message from the state', () => {
      const errorMessages = [new ErrorMessage('aMessage'), new ErrorMessage('anotherMessage')]
      const givenState = new AState().withErrorMessages(errorMessages).build()
  
      mutations[Mutation.REMOVE_APPLICATION_MESSAGE](givenState, Message.Error)
  
      const expectedState = new AState().withErrorMessages([new ErrorMessage('aMessage')]).build()
      expect(givenState).toMatchObject(expectedState)
    })

    it('adds a notification message to the state', () => {
      const messages = [new NotificationMessage('aMessage')]
      const givenState = new AState().withNotificationMessages(messages).build()
  
      const newMessage = new NotificationMessage('aNewMessage')
      mutations[Mutation.ADD_APPLICATION_MESSAGE](givenState, newMessage)
  
      const expectedMessages = [new NotificationMessage('aMessage'), new NotificationMessage('aNewMessage')]
      const expectedState = new AState().withNotificationMessages(expectedMessages).build()
      expect(givenState).toMatchObject(expectedState)
    })

    it('removes a notification message from the state', () => {
      const messages = [new NotificationMessage('aMessage'), new NotificationMessage('anotherMessage')]
      const givenState = new AState().withNotificationMessages(messages).build()
  
      mutations[Mutation.REMOVE_APPLICATION_MESSAGE](givenState, Message.Notification)
  
      const expectedState = new AState().withNotificationMessages([new NotificationMessage('aMessage')]).build()
      expect(givenState).toMatchObject(expectedState)
    })
  })
})
