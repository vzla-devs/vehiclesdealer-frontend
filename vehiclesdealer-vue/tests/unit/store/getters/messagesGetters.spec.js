import Getters from '@/store/getters/messagesGetters'
import { ERROR_MESSAGE } from '@/store/getters/getterTypes'
import initialState from '@/store/initialState'

describe('messagesGetters.js', () => {
  test('should get an error message from the state', () => {
    const givenState = Object.assign({}, initialState, { messages: { error: { show: true, message: 'anyMessage' } } })

    const result = Getters[ERROR_MESSAGE](givenState)

    expect(result).toEqual({ show: true, message: 'anyMessage' })
  })
})
