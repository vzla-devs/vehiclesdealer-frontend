import { SET_MESSAGE } from '@/store/mutations/mutationsTypes'

export default {
  [SET_MESSAGE]: (state, { type, message }) => {
    state.messages[type] = { show: true, message }
  }
}
