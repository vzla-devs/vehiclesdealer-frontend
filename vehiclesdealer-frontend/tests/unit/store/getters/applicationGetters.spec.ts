import getters from '@/store/getters/applicationGetters'
import { AState } from '@tests/helpers/builderHelpers'

describe('applicationGetters.js', () => {
  it('gets the application loading state', () => {
    const givenState = AState().withValue({ loading: true }).build()

    const result = getters.IS_LOADING(givenState)

    expect(result).toEqual(true)
  })

  describe('when getting messages', () => {
    it('gets the first available error message from the state', () => {
      const givenState = AState().withValue({ messages: { error: ['anyMessage', 'anyOtherMessage'] } }).build()
  
      const result = getters.ERROR_MESSAGE(givenState)
  
      expect(result).toBe('anyMessage')
    })
  
    it('gets a default error message from the state when there are no available messages', () => {
      const givenState = AState().withValue({ messages: { error: [] } }).build()
  
      const result = getters.ERROR_MESSAGE(givenState)
  
      expect(result).toBe('')
    })
  })
})
