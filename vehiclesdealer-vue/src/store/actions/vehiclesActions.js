import { GET_VEHICLES, SHOW_MESSAGE } from '@/store/actions/actionTypes'
import { SET_VEHICLES, SET_LOADING, RESET_LOADING } from '@/store/mutations/mutationTypes'
import { VehiclesClient } from '@/clients/clientsFactory'
import { MESSAGE_TYPES } from '@/constants/enums'

export default {
  [GET_VEHICLES]: async ({ commit, dispatch }) => {
    commit(SET_LOADING)
    try {
      const response = await VehiclesClient.get()
      commit(SET_VEHICLES, response.data)
    } catch (error) {
      dispatch(SHOW_MESSAGE, { type: MESSAGE_TYPES.ERROR, message: 'Ha ocurrido un error' })
      return error
    }
    commit(RESET_LOADING)
  }
}
