import mutations from '@/store/mutations/applicationMutations'
import { buildStateWith } from '@tests/helpers/builderHelpers'
import { MESSAGE_TYPES } from '@/constants/enums'
import {
  SET_APPLICATION_LOADING,
  SET_APPLICATION_MESSAGE
} from '@/store/mutations/mutationTypes'

describe('applicationMutations.js', () => {
  it('sets the loading state', () => {
    const givenState = buildStateWith({ loading: false })

    mutations[SET_APPLICATION_LOADING](givenState, true)

    const expectedState = buildStateWith({ loading: true })
    expect(givenState).toEqual(expectedState)
  })

  it('sets the error message', () => {
    const type = MESSAGE_TYPES.ERROR
    const givenState = buildStateWith({
      messages: { [type]: { show: false, message: '' } }
    })
    const message = 'anyMessage'

    mutations[SET_APPLICATION_MESSAGE](givenState, { show: true, type, message })

    const expectedState = buildStateWith({
      messages: { [type]: { show: true, message } }
    })
    expect(givenState).toMatchObject(expectedState)
  })
})
