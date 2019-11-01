import Getters from '@/store/getters/applicationGetters'
import { IS_LOADING } from '@/store/getters/getterTypes'
import { buildStateWith } from '@tests/helpers/builderHelpers'

describe('applicationGetters.js', () => {
  it('gets the application loading state', () => {
    const givenState = buildStateWith({ loading: true })

    const result = Getters[IS_LOADING](givenState)

    expect(result).toEqual(true)
  })
})
