import { IS_LOADING, ERROR_MESSAGE } from '@/store/getters/getterTypes'

export default {
  [IS_LOADING]: (state) => {
    return state.loading
  },
  [ERROR_MESSAGE]: (state) => {
    return state.messages.error[0]
  }
}
