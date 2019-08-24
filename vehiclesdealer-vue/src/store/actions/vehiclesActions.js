import { GET_VEHICLES } from '@/store/actions/actionTypes'
import { SET_VEHICLES } from '@/store/mutations/mutationTypes'
import { VehiclesClient } from '@/clients/clientsFactory'

export default {
  [GET_VEHICLES]: async ({ commit }) => {
    try {
      const response = await VehiclesClient.get()
      commit(SET_VEHICLES, response.data)
    } catch (error) {
      return error
    }
  }
}
