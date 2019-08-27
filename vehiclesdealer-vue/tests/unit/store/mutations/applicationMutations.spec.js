import Mutations from '@/store/mutations/applicationMutations'
import { SET_LOADING } from '@/store/mutations/mutationTypes'
import { buildStateWith } from '@tests/helpers/builderHelpers'

describe('applicationMutations.js', () => {
  test('should mutate the state with the loading state', () => {
    const givenState = buildStateWith({ loading: false })

    Mutations[SET_LOADING](givenState)

    const expectedState = buildStateWith({ loading: true })
    expect(givenState).toEqual(expectedState)
  })
})
