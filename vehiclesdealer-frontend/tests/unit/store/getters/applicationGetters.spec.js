import getters from '@/store/getters/applicationGetters'
import { IS_LOADING, ERROR_MESSAGE } from '@/store/getters/getterTypes'
import { buildStateWith } from '@tests/helpers/builderHelpers'

describe('applicationGetters.js', () => {
  it('gets the application loading state', () => {
    const givenState = buildStateWith({ loading: true })

    const result = getters[IS_LOADING](givenState)

    expect(result).toEqual(true)
  })

  it('gets an error message from the state', () => {
    const givenState = buildStateWith({ messages: { error: { show: true, message: 'anyMessage' } } })

    const result = getters[ERROR_MESSAGE](givenState)

    expect(result).toEqual({ show: true, message: 'anyMessage' })
  })
})
