import { SET_VEHICLES, SET_VEHICLES_SUCCESS, SET_VEHICLES_FAILURE } from '@/store/mutations/mutationTypes'

export default {
  [SET_VEHICLES]: (state) => {
    state.vehiclesState.loading = true
    state.vehiclesState.vehicles = []
    state.vehiclesState.error = { show: false, message: '' }
  },
  [SET_VEHICLES_SUCCESS]: (state, vehicles) => {
    state.vehiclesState.vehicles = vehicles
    state.vehiclesState.loading = false
  },
  [SET_VEHICLES_FAILURE]: (state, message) => {
    state.vehiclesState.error = { show: true, message }
    state.vehiclesState.loading = false
  }
}
