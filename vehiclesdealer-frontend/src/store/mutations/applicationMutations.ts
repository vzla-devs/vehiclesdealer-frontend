import { RootState } from '@/store/models/rootState'
import { ApplicationMessage } from '@/store/models/applicationMessage'
import { Message } from '@/store/types/message'
import { Mutation } from '@/store/mutations/types'

export default {
  [Mutation.SET_APPLICATION_LOADING]: function (state: RootState, loading: boolean): void {
    state.loading = loading
  },
  [Mutation.ADD_APPLICATION_MESSAGE]: function (state: RootState, message: ApplicationMessage): void {
    if (message.type === Message.Error) {
      state.messages.error.push(message)
    } else {
      state.messages.notification.push(message)
    }
  },
  [Mutation.REMOVE_APPLICATION_MESSAGE]: function (state: RootState, messageType: Message): void {
    if (messageType === Message.Error) {
      state.messages.error.pop()
    } else {
      state.messages.notification.pop()
    }
  }
}
