import { GET_VEHICLES } from '@/store/actions/actionTypes'
import {
  GET_VEHICLES_REQUEST,
  GET_VEHICLES_SUCCESS,
  GET_VEHICLES_FAILURE
} from '@/store/mutations/mutationTypes'
import { VehiclesClient } from '@/clients/clientsFactory'

export default {
  [GET_VEHICLES]: async ({ commit }) => {
    commit(GET_VEHICLES_REQUEST)
    try {
      const response = await VehiclesClient.get()
      commit(GET_VEHICLES_SUCCESS, response.data)
    } catch (error) {
      commit(GET_VEHICLES_FAILURE, 'Ha ocurrido un error')
    }
  }
}
