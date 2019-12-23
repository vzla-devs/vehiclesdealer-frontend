import { RootState } from '@/store/models/rootState'
import { Mutation } from '@/store/mutations/types'
import { Vehicle } from '@/store/models/vehicle'

export default {
  [Mutation.SET_VEHICLES]: (state: RootState, vehicles: Array<Vehicle>) => {
    state.vehicles = vehicles
  }
}
