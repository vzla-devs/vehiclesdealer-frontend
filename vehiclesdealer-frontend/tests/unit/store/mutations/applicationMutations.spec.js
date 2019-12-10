import Mutations from '@/store/mutations/applicationMutations'
import { buildStateWith } from '@tests/helpers/builderHelpers'
import { MESSAGE_TYPES } from '@/constants/enums'
import {
  SET_LOADING,
  RESET_LOADING,
  SET_MESSAGE,
  RESET_MESSAGE
} from '@/store/mutations/mutationTypes'

describe('applicationMutations.js', () => {
  describe('when changing the loading state', () => {
    it('sets the loading', () => {
      const givenState = buildStateWith({ loading: false })

      Mutations[SET_LOADING](givenState)

      const expectedState = buildStateWith({ loading: true })
      expect(givenState).toEqual(expectedState)
    })

    it('resets the loading state', () => {
      const givenState = buildStateWith({ loading: true })

      Mutations[RESET_LOADING](givenState)

      const expectedState = buildStateWith({ loading: false })
      expect(givenState).toEqual(expectedState)
    })
  })

  describe('when changing the messages', () => {
    it('sets the error message', () => {
      const type = MESSAGE_TYPES.ERROR
      const givenState = buildStateWith({ messages: aMessageFromState({ type }) })
      const givenMessage = 'anyMessage'

      Mutations[SET_MESSAGE](givenState, { type, message: givenMessage })

      const expectedState = { messages: aMessageFromState({ type, show: true, message: givenMessage }) }
      expect(givenState).toMatchObject(expectedState)
    })

    it('resets the error message', () => {
      const type = MESSAGE_TYPES.ERROR
      const givenState = buildStateWith({ messages: aMessageFromState({ type, show: true, message: 'anyMessage' }) })

      Mutations[RESET_MESSAGE](givenState, type)

      const expectedState = buildStateWith({ messages: aMessageFromState({ type, show: false, message: '' }) })
      expect(givenState).toEqual(expectedState)
    })
  })
})

function aMessageFromState ({ type, show = false, message = '' }) {
  return { [type]: { show, message } }
}
