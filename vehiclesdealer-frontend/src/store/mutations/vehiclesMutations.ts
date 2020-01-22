import { RootState } from '@/store/interfaces/rootState'
import { Mutation } from '@/store/mutations/types'
import { Vehicle } from '@/store/interfaces/vehicle'

export default {
  [Mutation.SET_VEHICLES]: function (state: RootState, vehicles: Array<Vehicle>): void {
    state.vehicles = vehicles
  }
}
