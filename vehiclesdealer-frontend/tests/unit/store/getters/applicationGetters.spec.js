import getters from '@/store/getters/applicationGetters'
import { IS_LOADING, ERROR_MESSAGE } from '@/store/getters/getterTypes'
import { AState } from '@tests/helpers/builderHelpers'

describe('applicationGetters.js', () => {
  it('gets the application loading state', () => {
    const givenState = AState().withValue({ loading: true }).build()

    const result = getters[IS_LOADING](givenState)

    expect(result).toEqual(true)
  })

  it('gets an error message from the state', () => {
    const givenState = AState().withValue({ messages: { error: ['anyMessage', 'anyOtherMessage'] } }).build()

    const result = getters[ERROR_MESSAGE](givenState)

    expect(result).toBe('anyMessage')
  })
})
