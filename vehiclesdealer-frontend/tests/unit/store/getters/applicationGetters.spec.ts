import getters from '@/store/getters/applicationGetters'
import { AState } from '@tests/builders/stateBuilder'
import { ErrorMessage } from '@/store/models/errorMessage'
import { NotificationMessage } from '@/store/models/notificationMessage'

describe('applicationGetters.js', () => {
  it('gets the application loading state', () => {
    const state = new AState().withLoading(true).build()

    const result = getters.IS_LOADING(state)

    expect(result).toEqual(true)
  })

  describe('when getting messages', () => {
    it('gets the first available error message from the state', () => {
      const messages = [new ErrorMessage('anyMessage'), new ErrorMessage('anyOtherMessage')]
      const state = new AState().withErrorMessages(messages).build()

      const result = getters.ERROR_MESSAGE(state)

      expect(result).toBe('anyMessage')
    })

    it('gets a default error message from the state when there are no available messages', () => {
      const state = new AState().withErrorMessages([]).build()

      const result = getters.ERROR_MESSAGE(state)

      expect(result).toBe('')
    })

    it('gets the first available notification message from the state', () => {
      const messages = [new NotificationMessage('anyMessage'), new NotificationMessage('anyOtherMessage')]
      const state = new AState().withNotificationMessages(messages).build()

      const result = getters.NOTIFICATION_MESSAGE(state)

      expect(result).toBe('anyMessage')
    })

    it('gets a default notification message from the state when there are no available messages', () => {
      const state = new AState().withNotificationMessages([]).build()

      const result = getters.NOTIFICATION_MESSAGE(state)

      expect(result).toBe('')
    })
  })
})
