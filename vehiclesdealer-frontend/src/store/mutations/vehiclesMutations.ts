import { RootState } from '@/store/interfaces/rootState'
import { Mutation } from '@/store/mutations/types'

export default {
  [Mutation.SET_VEHICLES]: (state: RootState, vehicles: Array<any>) => {
    state.vehicles = vehicles
  }
}
