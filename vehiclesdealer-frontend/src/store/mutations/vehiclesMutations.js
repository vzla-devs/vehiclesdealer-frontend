import { FETCH_VEHICLES_REQUEST, FETCH_VEHICLES_SUCCESS, FETCH_VEHICLES_FAILURE } from '@/store/mutations/mutationTypes'

export default {
  [FETCH_VEHICLES_REQUEST]: (state) => {
    state.vehiclesState.loading = true
    state.vehiclesState.vehicles = []
    state.vehiclesState.error = ''
  },
  [FETCH_VEHICLES_SUCCESS]: (state, vehicles) => {
    state.vehiclesState.vehicles = vehicles
    state.vehiclesState.loading = false
  },
  [FETCH_VEHICLES_FAILURE]: (state, message) => {
    state.vehiclesState.error = message
    state.vehiclesState.loading = false
  }
}
