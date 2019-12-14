import mutations from '@/store/mutations/applicationMutations'
import { buildStateWith } from '@tests/helpers/builderHelpers'
import { MESSAGE_TYPES } from '@/constants/enums'
import {
  SET_APPLICATION_LOADING,
  ADD_APPLICATION_MESSAGE,
  REMOVE_APPLICATION_MESSAGE
} from '@/store/mutations/mutationTypes'

describe('applicationMutations.js', () => {
  it('sets the loading state', () => {
    const givenState = buildStateWith({ loading: false })

    mutations[SET_APPLICATION_LOADING](givenState, true)

    const expectedState = buildStateWith({ loading: true })
    expect(givenState).toEqual(expectedState)
  })

  it('adds an error message to the state', () => {
    const type = MESSAGE_TYPES.ERROR
    const givenState = buildStateWith({
      messages: { [type]: ['anyMessage'] }
    })

    const newMessage = 'anyNewMessage'
    mutations[ADD_APPLICATION_MESSAGE](givenState, { type, message: newMessage })

    const expectedState = buildStateWith({
      messages: { [type]: ['anyMessage', newMessage] }
    })
    expect(givenState).toMatchObject(expectedState)
  })

  it('removes an error message to the state', () => {
    const type = MESSAGE_TYPES.ERROR
    const givenState = buildStateWith({
      messages: { [type]: ['anyMessage', 'anyOtherMessage'] }
    })

    mutations[REMOVE_APPLICATION_MESSAGE](givenState, type)

    const expectedState = buildStateWith({
      messages: { [type]: ['anyMessage'] }
    })
    expect(givenState).toMatchObject(expectedState)
  })
})
