import { RootState } from '@/store/interfaces/rootState'
import { ApplicationMessage } from '@/store/interfaces/applicationMessage'
import { Message } from '@/store/types/message'
import { Mutation } from '../types/mutations'

export default {
  [Mutation.SET_APPLICATION_LOADING]: (state: RootState, loading: boolean) => {
    state.loading = loading
  },
  [Mutation.ADD_APPLICATION_MESSAGE]: (state: RootState, message: ApplicationMessage) => {
    state.messages.error.push(message)
  },
  [Mutation.REMOVE_APPLICATION_MESSAGE]: (state: RootState, messageType: Message) => {
    state.messages.error.pop()
  }
}
