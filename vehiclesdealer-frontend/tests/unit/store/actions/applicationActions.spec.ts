import actions from '@/store/actions/applicationActions'
import { ErrorMessage } from '@/store/models/errorMessage'
import { Mutation } from '@/store/mutations/types'
import { Message } from '@/store/types/message'

describe('applicationActions.js', () => {
  it('commits the corresponding mutation to show an error message', () => {
    const commit = jest.fn()
    const errorMessage = new ErrorMessage('anyMessage')

    actions.SHOW_MESSAGE({ commit }, errorMessage)

    expect(commit).toHaveBeenCalledWith(Mutation.ADD_APPLICATION_MESSAGE, errorMessage)
  })

  it('commits the corresponding mutation to clear an error message', () => {
    const commit = jest.fn()

    actions.CLEAR_MESSAGE ({ commit }, Message.Error)

    expect(commit).toHaveBeenCalledWith(Mutation.REMOVE_APPLICATION_MESSAGE, Message.Error)
  })
})
