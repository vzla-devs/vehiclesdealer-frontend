import { RootState } from '@/store/interfaces/rootState'
import { Getter } from '@/store/getters/types'
import { Vehicle } from '@/store/interfaces/vehicle'

export default {
  [Getter.AVAILABLE_VEHICLES]: function (state: RootState): Array<Vehicle> {
    return state.vehicles
  }
}
