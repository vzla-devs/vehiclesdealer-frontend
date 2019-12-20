import { Getter } from '@/store/getters/types'
import { RootState } from '@/store/interfaces/rootState'

export default {
  [Getter.IS_LOADING]: function (state: RootState): boolean {
    return state.loading
  },
  [Getter.ERROR_MESSAGE]: function (state: RootState): string {
    if (state.messages.error.length > 0) {
      return state.messages.error[0].message
    }
    return ''
  },
  [Getter.NOTIFICATION_MESSAGE]: function (state: RootState): string {
    return state.messages.notification[0].message
  }
}
