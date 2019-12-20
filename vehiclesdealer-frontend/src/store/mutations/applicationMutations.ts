import { RootState } from '@/store/interfaces/rootState'
import { ApplicationMessage } from '@/store/interfaces/applicationMessage'
import { Message } from '@/store/types/message'
import { Mutation } from '@/store/mutations/types'

export default {
  [Mutation.SET_APPLICATION_LOADING]: (state: RootState, loading: boolean) => {
    state.loading = loading
  },
  [Mutation.ADD_APPLICATION_MESSAGE]: (state: RootState, message: ApplicationMessage) => {
    if (message.type === Message.Error) {
      state.messages.error.push(message)
    } else {
      state.messages.notification.push(message)
    }
  },
  [Mutation.REMOVE_APPLICATION_MESSAGE]: (state: RootState, messageType: Message) => {
    state.messages.error.pop()
  }
}
