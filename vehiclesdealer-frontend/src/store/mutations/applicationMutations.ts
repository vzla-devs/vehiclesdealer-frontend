import { RootState } from '@/store/interfaces/rootState'
import { ApplicationMessage } from '@/store/interfaces/applicationMessage'
import { Mutation } from '@/store/mutations/types'

export default {
  [Mutation.SET_APPLICATION_LOADING]: function (state: RootState, loading: boolean): void {
    state.loading = loading
  },
  [Mutation.ADD_APPLICATION_MESSAGE]: function (state: RootState, message: ApplicationMessage): void {
    state.messages[message.type].push(message)
  },
  [Mutation.REMOVE_APPLICATION_MESSAGE]: function (state: RootState, messageType: ApplicationMessage['type']): void {
    state.messages[messageType].pop()
  }
}
