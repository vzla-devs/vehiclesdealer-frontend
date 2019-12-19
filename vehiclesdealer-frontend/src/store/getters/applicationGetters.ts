import { Getter } from '@/store/getters/types'
import { RootState } from '@/store/interfaces/rootState'

export default {
  [Getter.IS_LOADING]: (state: RootState) => {
    return state.loading
  },
  [Getter.ERROR_MESSAGE]: (state: RootState) => {
    return state.messages.error.length > 0 ? state.messages.error[0] : ''
  }
}
