import { Action } from './types'
import { Mutation } from '@/store/mutations/types'
import { ApplicationMessage } from '@/store/interfaces/applicationMessage'

export default {
  [Action.SHOW_MESSAGE]: ({ commit }, message: ApplicationMessage) => {
    commit(Mutation.ADD_APPLICATION_MESSAGE, message)
  },
  [Action.CLEAR_MESSAGE]: ({ commit }, type: ApplicationMessage['type']) => {
    commit(Mutation.REMOVE_APPLICATION_MESSAGE, type)
  }
}
