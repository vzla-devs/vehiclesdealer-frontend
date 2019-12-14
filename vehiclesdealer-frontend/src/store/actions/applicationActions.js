import { SHOW_MESSAGE, CLEAR_MESSAGE } from '@/store/actions/actionTypes'
import { ADD_APPLICATION_MESSAGE, REMOVE_APPLICATION_MESSAGE } from '@/store/mutations/mutationTypes'

export default {
  [SHOW_MESSAGE]: ({ commit }, { type, message }) => {
    commit(ADD_APPLICATION_MESSAGE, { type, message })
  },
  [CLEAR_MESSAGE]: ({ commit }, type) => {
    commit(REMOVE_APPLICATION_MESSAGE, type)
  }
}
