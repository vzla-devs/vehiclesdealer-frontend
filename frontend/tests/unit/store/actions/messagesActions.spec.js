import Actions from '@/store/actions/messagesActions'
import { SHOW_MESSAGE, CLEAR_MESSAGE } from '@/store/actions/actionTypes'
import { SET_MESSAGE, RESET_MESSAGE } from '@/store/mutations/mutationTypes'
import { MESSAGE_TYPES } from '@/constants/enums'

describe('messagesActions.js', () => {
  it('commits the corresponding mutation to show an error message', () => {
    const commit = jest.fn()
    const payload = {
      type: MESSAGE_TYPES.ERROR,
      message: 'anyMessage'
    }

    Actions[SHOW_MESSAGE]({ commit }, payload)

    expect(commit).toHaveBeenCalledWith(SET_MESSAGE, payload)
  })

  it('commits the corresponding mutation to clear an error message', () => {
    const commit = jest.fn()
    const type = MESSAGE_TYPES.ERROR

    Actions[CLEAR_MESSAGE]({ commit }, type)

    expect(commit).toHaveBeenCalledWith(RESET_MESSAGE, type)
  })
})
