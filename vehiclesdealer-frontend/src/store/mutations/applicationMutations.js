import {
  SET_APPLICATION_LOADING,
  SET_APPLICATION_MESSAGE
} from '@/store/mutations/mutationTypes'

export default {
  [SET_APPLICATION_LOADING]: (state, loading) => {
    state.loading = loading
  },
  [SET_APPLICATION_MESSAGE]: (state, { show, type, message }) => {
    state.messages[type] = { show, message }
  }
}
