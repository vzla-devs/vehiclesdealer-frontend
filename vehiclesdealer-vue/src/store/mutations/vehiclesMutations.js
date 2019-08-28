import { GET_VEHICLES, GET_VEHICLES_SUCCESS, GET_VEHICLES_FAILURE } from '@/store/mutations/mutationTypes'

export default {
  [GET_VEHICLES]: (state) => {
    state.vehiclesState.loading = true
    state.vehiclesState.vehicles = []
    state.vehiclesState.error = { show: false, message: '' }
  },
  [GET_VEHICLES_SUCCESS]: (state, vehicles) => {
    state.vehiclesState.vehicles = vehicles
    state.vehiclesState.loading = false
  },
  [GET_VEHICLES_FAILURE]: (state, message) => {
    state.vehiclesState.error.show = true
    state.vehiclesState.error.message = message
    state.vehiclesState.loading = false
  }
}
