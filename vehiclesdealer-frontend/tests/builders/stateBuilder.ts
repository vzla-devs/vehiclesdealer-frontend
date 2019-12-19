import { InitialState } from '@/store/models/initialState'

export function AState () {
  const state = new InitialState()

  function withVehicles (vehicles: Array<any>) {
    state.vehicles = vehicles
    return self
  }

  function build () {
    return state
  }

  const self = {
    withVehicles,
    build
  }
  return self
}
