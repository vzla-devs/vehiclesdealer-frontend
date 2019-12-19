import { AVAILABLE_VEHICLES } from '@/store/getters/getterTypes'
import { RootState } from '@/store/interfaces/rootState'

export default {
  [AVAILABLE_VEHICLES]: (state: RootState) => {
    return state.vehicles
  }
}
