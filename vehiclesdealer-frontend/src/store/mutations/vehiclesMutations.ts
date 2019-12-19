import { SET_VEHICLES } from '@/store/mutations/mutationTypes'
import { RootState } from '@/store/interfaces/rootState'

export default {
  [SET_VEHICLES]: (state: RootState, vehicles: Array<any>) => {
    state.vehicles = vehicles
  }
}
