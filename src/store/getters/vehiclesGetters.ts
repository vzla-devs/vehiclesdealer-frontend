import { RootState } from '@/store/models/rootState'
import { Getter } from '@/store/getters/types'
import { Vehicle, NoVehicle } from '@/store/models/vehicle'

export default {
  [Getter.AVAILABLE_VEHICLES]: function (state: RootState): Array<Vehicle> {
    return state.vehicles
  },
  [Getter.VEHICLE]: (state: RootState) => (id: string): Vehicle => {
    const returnedVehicle = state.vehicles.find(v => v.id === id)
    if (!returnedVehicle) return new NoVehicle()
    return returnedVehicle
  }
}
