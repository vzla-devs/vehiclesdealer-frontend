import { RootState } from '@/store/interfaces/rootState'
import { Mutation } from '@/store/types/mutations'

export default {
  [Mutation.SET_VEHICLES]: (state: RootState, vehicles: Array<any>) => {
    state.vehicles = vehicles
  }
}
