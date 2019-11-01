import { ERROR_MESSAGE } from '@/store/getters/getterTypes'

export default {
  [ERROR_MESSAGE]: (state) => {
    return state.messages.error
  }
}
