import { GET_VEHICLES } from '@/store/actions/actionTypes'
import { SET_VEHICLES_REQUEST, SET_VEHICLES_SUCCESS, SET_VEHICLES_FAILURE } from '@/store/mutations/mutationTypes'
import { VehiclesClient } from '@/clients/clientsFactory'

export default {
  [GET_VEHICLES]: async ({ commit }) => {
    commit(SET_VEHICLES_REQUEST)
    try {
      const response = await VehiclesClient.get()
      commit(SET_VEHICLES_SUCCESS, response.data)
    } catch (error) {
      commit(SET_VEHICLES_FAILURE, 'Ha ocurrido un error')
    }
  }
}
