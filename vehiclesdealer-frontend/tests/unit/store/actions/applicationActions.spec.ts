import actions from '@/store/actions/applicationActions'
import { ErrorMessage } from '@/store/models/errorMessage'
import { Mutation } from '@/store/mutations/types'
import { Message } from '@/store/types/message'
import { NotificationMessage } from '@/store/models/notificationMessage'

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

  it('commits the corresponding mutation to show a notification message', () => {
    const commit = jest.fn()
    const message = new NotificationMessage('anyMessage')

    actions.SHOW_MESSAGE({ commit }, message)

    expect(commit).toHaveBeenCalledWith(Mutation.ADD_APPLICATION_MESSAGE, message)
  })

  it('commits the corresponding mutation to clear a notification message', () => {
    const commit = jest.fn()

    actions.CLEAR_MESSAGE ({ commit }, Message.Notification)

    expect(commit).toHaveBeenCalledWith(Mutation.REMOVE_APPLICATION_MESSAGE, Message.Notification)
  })
})
