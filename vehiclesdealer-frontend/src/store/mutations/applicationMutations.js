import {
  SET_LOADING,
  RESET_LOADING,
  SET_MESSAGE,
  RESET_MESSAGE
} from '@/store/mutations/mutationTypes'

export default {
  [SET_LOADING]: (state) => {
    state.loading = true
  },
  [RESET_LOADING]: (state) => {
    state.loading = false
  },
  [SET_MESSAGE]: (state, { type, message }) => {
    state.messages[type] = { show: true, message }
  },
  [RESET_MESSAGE]: (state, type) => {
    state.messages[type] = { show: false, message: '' }
  }
}
