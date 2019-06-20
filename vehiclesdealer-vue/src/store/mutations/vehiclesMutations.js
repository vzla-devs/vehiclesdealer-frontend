import { SET_VEHICLES } from '@/store/mutations/mutationsTypes'

export default {
  [SET_VEHICLES]: (state, vehicles) => {
    state.vehicles = vehicles
  }
}
