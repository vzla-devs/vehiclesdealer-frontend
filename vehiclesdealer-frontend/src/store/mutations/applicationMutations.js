import {
  SET_APPLICATION_LOADING,
  RESET_APPLICATION_LOADING,
  SET_APPLICATION_MESSAGE,
  RESET_APPLICATION_MESSAGE
} from '@/store/mutations/mutationTypes'

export default {
  [SET_APPLICATION_LOADING]: (state) => {
    state.loading = true
  },
  [RESET_APPLICATION_LOADING]: (state) => {
    state.loading = false
  },
  [SET_APPLICATION_MESSAGE]: (state, { type, message }) => {
    state.messages[type] = { show: true, message }
  },
  [RESET_APPLICATION_MESSAGE]: (state, type) => {
    state.messages[type] = { show: false, message: '' }
  }
}
