import { IS_LOADING } from '@/store/getters/getterTypes'

export default {
  [IS_LOADING]: (state) => {
    return state.loading
  }
}
