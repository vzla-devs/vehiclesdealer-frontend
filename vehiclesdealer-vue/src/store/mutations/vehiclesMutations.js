import { SET_VEHICLES } from '@/store/mutations/mutationTypes'

export default {
  [SET_VEHICLES]: (state, vehicles) => {
    state.vehicles = vehicles
  }
}
