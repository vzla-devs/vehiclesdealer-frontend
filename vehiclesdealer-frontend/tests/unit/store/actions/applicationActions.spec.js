import actions from '@/store/actions/applicationActions'
import { SHOW_MESSAGE, CLEAR_MESSAGE } from '@/store/actions/actionTypes'
import { ADD_APPLICATION_MESSAGE, REMOVE_APPLICATION_MESSAGE } from '@/store/mutations/mutationTypes'
import { MESSAGE_TYPES } from '@/constants/enums'

describe('applicationActions.js', () => {
  it('commits the corresponding mutation to show an error message', () => {
    const commit = jest.fn()
    const payload = {
      type: MESSAGE_TYPES.ERROR,
      message: 'anyMessage'
    }

    actions[SHOW_MESSAGE]({ commit }, payload)

    expect(commit).toHaveBeenCalledWith(ADD_APPLICATION_MESSAGE, payload)
  })

  it('commits the corresponding mutation to clear an error message', () => {
    const commit = jest.fn()
    const type = MESSAGE_TYPES.ERROR

    actions[CLEAR_MESSAGE]({ commit }, type)

    expect(commit).toHaveBeenCalledWith(REMOVE_APPLICATION_MESSAGE, type)
  })
})
