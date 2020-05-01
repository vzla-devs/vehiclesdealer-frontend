import actions from '@/store/actions/applicationActions'
import { Mutation } from '@/store/mutations/types'
import { ApplicationMessage } from '@/store/models/applicationMessage'

describe('applicationActions.js', () => {
  it('commits the corresponding mutation to show an error message', () => {
    const commit = jest.fn()
    const errorMessage: ApplicationMessage = { type: 'error', message: 'aMessage' }

    actions.SHOW_MESSAGE({ commit }, errorMessage)

    expect(commit).toHaveBeenCalledWith(Mutation.ADD_APPLICATION_MESSAGE, errorMessage)
  })

  it('commits the corresponding mutation to clear an error message', () => {
    const commit = jest.fn()

    actions.CLEAR_MESSAGE({ commit }, 'error')

    expect(commit).toHaveBeenCalledWith(Mutation.REMOVE_APPLICATION_MESSAGE, 'error')
  })

  it('commits the corresponding mutation to show a notification message', () => {
    const commit = jest.fn()
    const message: ApplicationMessage = { type: 'notification', message: 'aMessage' }

    actions.SHOW_MESSAGE({ commit }, message)

    expect(commit).toHaveBeenCalledWith(Mutation.ADD_APPLICATION_MESSAGE, message)
  })

  it('commits the corresponding mutation to clear a notification message', () => {
    const commit = jest.fn()

    actions.CLEAR_MESSAGE({ commit }, 'notification')

    expect(commit).toHaveBeenCalledWith(Mutation.REMOVE_APPLICATION_MESSAGE, 'notification')
  })
})
