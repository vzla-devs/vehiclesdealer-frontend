import { GET_VEHICLES_REQUEST, GET_VEHICLES_SUCCESS, GET_VEHICLES_FAILURE } from '@/store/mutations/mutationTypes'

export default {
  [GET_VEHICLES_REQUEST]: (state) => {
    state.vehiclesState.loading = true
    state.vehiclesState.vehicles = []
    state.vehiclesState.error = ''
  },
  [GET_VEHICLES_SUCCESS]: (state, vehicles) => {
    state.vehiclesState.vehicles = vehicles
    state.vehiclesState.loading = false
  },
  [GET_VEHICLES_FAILURE]: (state, message) => {
    state.vehiclesState.error = message
    state.vehiclesState.loading = false
  }
}
