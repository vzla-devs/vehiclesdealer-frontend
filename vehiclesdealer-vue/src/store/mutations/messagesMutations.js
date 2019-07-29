import { SET_MESSAGE, RESET_MESSAGE } from '@/store/mutations/mutationTypes'

export default {
  [SET_MESSAGE]: (state, { type, message }) => {
    state.messages[type] = { show: true, message }
  },
  [RESET_MESSAGE]: (state, type) => {
    state.messages[type] = { show: false, message: '' }
  }
}
