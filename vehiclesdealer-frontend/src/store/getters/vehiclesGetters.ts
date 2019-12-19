import { RootState } from '@/store/interfaces/rootState'
import { Getter } from '@/store/getters/types'

export default {
  [Getter.AVAILABLE_VEHICLES]: (state: RootState) => {
    return state.vehicles
  }
}
