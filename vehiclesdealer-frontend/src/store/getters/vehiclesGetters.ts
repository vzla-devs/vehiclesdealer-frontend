import { RootState } from '@/store/models/rootState'
import { Getter } from '@/store/getters/types'
import { Vehicle } from '@/store/models/vehicle'

export default {
  [Getter.AVAILABLE_VEHICLES]: function (state: RootState): Array<Vehicle> {
    return state.vehicles
  }
}
