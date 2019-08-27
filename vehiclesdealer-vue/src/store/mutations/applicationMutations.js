import { SET_LOADING, RESET_LOADING } from '@/store/mutations/mutationTypes'

export default {
  [SET_LOADING]: (state) => {
    state.loading = true
  },
  [RESET_LOADING]: (state) => {
    state.loading = false
  }
}
