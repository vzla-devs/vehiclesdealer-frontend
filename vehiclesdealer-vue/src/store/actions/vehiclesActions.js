import { GET_VEHICLES } from '@/store/actions/actionsTypes'
import { SET_VEHICLES } from '@/store/mutations/mutationsTypes'
import { GET_VEHICLES_URL } from '@/constants/serverRoutes'
import axios from 'axios'

export default {
  [GET_VEHICLES]: async ({ commit }) => {
    try {
      const response = await axios.get(GET_VEHICLES_URL)
      commit(SET_VEHICLES, response.data)
    } catch (error) {
      return error
    }
  }
}
