import { GET_VEHICLES } from '@/store/actions/actionTypes'
import { SET_VEHICLES, SET_MESSAGE } from '@/store/mutations/mutationTypes'
import { VehiclesClient } from '@/clients/clientsFactory'
import { MESSAGE_TYPES } from '@/constants/enums'

export default {
  [GET_VEHICLES]: async ({ commit }) => {
    try {
      const response = await VehiclesClient.get()
      commit(SET_VEHICLES, response.data)
    } catch (error) {
      commit(SET_MESSAGE, { type: MESSAGE_TYPES.ERROR, message: 'Ha ocurrido un error' })
      return error
    }
  }
}
