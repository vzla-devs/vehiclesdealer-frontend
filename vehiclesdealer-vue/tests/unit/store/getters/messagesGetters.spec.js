import Getters from '@/store/getters/messagesGetters'
import { ERROR_MESSAGE } from '@/store/getters/getterTypes'
import { buildStateWith } from '@tests/helpers/builderHelpers'

describe('messagesGetters.js', () => {
  it('should get an error message from the state', () => {
    const givenState = buildStateWith({ messages: { error: { show: true, message: 'anyMessage' } } })

    const result = Getters[ERROR_MESSAGE](givenState)

    expect(result).toEqual({ show: true, message: 'anyMessage' })
  })
})
