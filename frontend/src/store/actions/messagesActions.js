import { SHOW_MESSAGE, CLEAR_MESSAGE } from '@/store/actions/actionTypes'
import { SET_MESSAGE, RESET_MESSAGE } from '@/store/mutations/mutationTypes'

export default {
  [SHOW_MESSAGE]: ({ commit }, { type, message }) => {
    commit(SET_MESSAGE, { type, message })
  },
  [CLEAR_MESSAGE]: ({ commit }, type) => {
    commit(RESET_MESSAGE, type)
  }
}
