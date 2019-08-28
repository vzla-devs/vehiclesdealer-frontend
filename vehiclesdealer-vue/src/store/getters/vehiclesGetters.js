import { AVAILABLE_VEHICLES, LOADING_VEHICLES } from '@/store/getters/getterTypes'

export default {
  [AVAILABLE_VEHICLES]: (state) => {
    return state.vehiclesState.vehicles
  },
  [LOADING_VEHICLES]: (state) => {
    return state.vehiclesState.loading
  }
}
