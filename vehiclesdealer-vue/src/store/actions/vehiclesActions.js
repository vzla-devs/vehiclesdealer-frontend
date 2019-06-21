import { GET_VEHICLES } from '@/store/actions/actionsTypes'
import { SET_VEHICLES } from '@/store/mutations/mutationsTypes'
import { GET_VEHICLES_URL } from '@/constants/serverRoutes'
import axios from 'axios'

export default {
  [GET_VEHICLES]: ({ commit }) => {
    axios.get(GET_VEHICLES_URL)
      .then((vehicles) => {
        commit(SET_VEHICLES, vehicles)
      })
  }
}
