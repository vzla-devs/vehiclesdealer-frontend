import getters from '@/store/getters/applicationGetters'
import { AState } from '@tests/builders/stateBuilder'
import { ApplicationMessage } from '@/store/models/applicationMessage'

describe('applicationGetters.js', () => {
  it('gets the application loading state', () => {
    const state = new AState().withLoading(true).build()

    const result = getters.IS_LOADING(state)

    expect(result).toEqual(true)
  })

  describe('when getting messages', () => {
    it('gets the first available error message from the state', () => {
      const givenMessages: Array<ApplicationMessage> = [
        { type: 'error', message: 'aMessage' },
        { type: 'error', message: 'anotherMessage' }
      ]
      const state = new AState().withErrorMessages(givenMessages).build()

      const result = getters.ERROR_MESSAGE(state)

      expect(result).toBe('aMessage')
    })

    it('gets a default error message from the state when there are no available messages', () => {
      const state = new AState().withErrorMessages([]).build()

      const result = getters.ERROR_MESSAGE(state)

      expect(result).toBe('')
    })

    it('gets the first available notification message from the state', () => {
      const givenMessages: Array<ApplicationMessage> = [
        { type: 'notification', message: 'aMessage' },
        { type: 'notification', message: 'anotherMessage' }
      ]
      const state = new AState().withNotificationMessages(givenMessages).build()

      const result = getters.NOTIFICATION_MESSAGE(state)

      expect(result).toBe('aMessage')
    })

    it('gets a default notification message from the state when there are no available messages', () => {
      const state = new AState().withNotificationMessages([]).build()

      const result = getters.NOTIFICATION_MESSAGE(state)

      expect(result).toBe('')
    })
  })
})
