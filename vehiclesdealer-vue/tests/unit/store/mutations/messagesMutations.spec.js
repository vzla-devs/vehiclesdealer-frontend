import Mutations from '@/store/mutations/messagesMutations'
import { SET_MESSAGE, RESET_MESSAGE } from '@/store/mutations/mutationTypes'
import { MESSAGE_TYPES } from '@/constants/enums'
import { buildStateWith } from '@tests/helpers/builderHelpers'

describe('messagesMutations.js', () => {
  it('mutates the state with a new error message', () => {
    const type = MESSAGE_TYPES.ERROR
    const givenState = buildStateWith({ messages: aMessageFromState({ type }) })
    const givenMessage = 'anyMessage'

    Mutations[SET_MESSAGE](givenState, { type, message: givenMessage })

    const expectedState = { messages: aMessageFromState({ type, show: true, message: givenMessage }) }
    expect(givenState).toMatchObject(expectedState)
  })

  it('mutates the state resetting an error message', () => {
    const type = MESSAGE_TYPES.ERROR
    const givenState = buildStateWith({ messages: aMessageFromState({ type, show: true, message: 'anyMessage' }) })

    Mutations[RESET_MESSAGE](givenState, type)

    const expectedState = buildStateWith({ messages: aMessageFromState({ type, show: false, message: '' }) })
    expect(givenState).toEqual(expectedState)
  })

  function aMessageFromState ({ type, show = false, message = '' }) {
    return { [type]: { show, message } }
  }
})
