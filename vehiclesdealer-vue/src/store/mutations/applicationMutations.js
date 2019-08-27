import { SET_LOADING } from '@/store/mutations/mutationTypes'

export default {
  [SET_LOADING]: (state) => {
    state.loading = true
  }
}
