import { SHOW_MESSAGE, CLEAR_MESSAGE } from '@/store/actions/actionsTypes'
import { SET_MESSAGE, RESET_MESSAGE } from '@/store/mutations/mutationsTypes'

export default {
  [SHOW_MESSAGE]: ({ commit }, { type, message }) => {
    commit(SET_MESSAGE, { type, message })
  },
  [CLEAR_MESSAGE]: ({ commit }, type) => {
    commit(RESET_MESSAGE, type)
  }
}
