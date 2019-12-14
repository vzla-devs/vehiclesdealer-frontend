import {
  SET_APPLICATION_LOADING,
  ADD_APPLICATION_MESSAGE,
  REMOVE_APPLICATION_MESSAGE
} from '@/store/mutations/mutationTypes'

export default {
  [SET_APPLICATION_LOADING]: (state, loading) => {
    state.loading = loading
  },
  [ADD_APPLICATION_MESSAGE]: (state, { type, message }) => {
    state.messages[type].push(message)
  },
  [REMOVE_APPLICATION_MESSAGE]: (state, type) => {
    state.messages[type].pop()
  }
}
