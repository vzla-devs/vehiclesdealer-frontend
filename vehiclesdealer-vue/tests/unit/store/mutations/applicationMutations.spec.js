import Mutations from '@/store/mutations/applicationMutations'
import { SET_LOADING, RESET_LOADING } from '@/store/mutations/mutationTypes'
import { buildStateWith } from '@tests/helpers/builderHelpers'

describe('applicationMutations.js', () => {
  test('should set the loading state to true', () => {
    const givenState = buildStateWith({ loading: false })

    Mutations[SET_LOADING](givenState)

    const expectedState = buildStateWith({ loading: true })
    expect(givenState).toEqual(expectedState)
  })

  test('should set the loading state to false', () => {
    const givenState = buildStateWith({ loading: true })

    Mutations[RESET_LOADING](givenState)

    const expectedState = buildStateWith({ loading: false })
    expect(givenState).toEqual(expectedState)
  })
})
