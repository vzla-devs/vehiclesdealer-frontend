import { GET_VEHICLES } from '@/store/actions/actionTypes'
import {
  FETCH_VEHICLES_REQUEST,
  FETCH_VEHICLES_SUCCESS,
  FETCH_VEHICLES_FAILURE
} from '@/store/mutations/mutationTypes'
import { VehiclesClient } from '@/clients/clientsFactory'

export default {
  [GET_VEHICLES]: async ({ commit }) => {
    commit(FETCH_VEHICLES_REQUEST)
    try {
      const response = await VehiclesClient.get()
      commit(FETCH_VEHICLES_SUCCESS, response.data)
    } catch (error) {
      commit(FETCH_VEHICLES_FAILURE, 'Ha ocurrido un error')
    }
  }
}
