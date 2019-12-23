import { RootState } from '@/store/models/rootState'
import { Mutation } from '@/store/mutations/types'
import { Vehicle } from '@/store/models/vehicle'

export default {
  [Mutation.SET_VEHICLES]: function (state: RootState, vehicles: Array<Vehicle>): void {
    state.vehicles = vehicles
  }
}
