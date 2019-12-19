import { Action } from './types'
import { Mutation } from '@/store/mutations/types'
import { ErrorMessage } from '@/store/models/errorMessage'
import { Message } from '@/store/types/message'

export default {
  [Action.SHOW_MESSAGE]: ({ commit }, message: ErrorMessage) => {
    commit(Mutation.ADD_APPLICATION_MESSAGE, message)
  },
  [Action.CLEAR_MESSAGE]: ({ commit }, type: Message) => {
    commit(Mutation.REMOVE_APPLICATION_MESSAGE, type)
  }
}
