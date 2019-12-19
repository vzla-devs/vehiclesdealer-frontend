import { InitialState } from '@/store/models/initialState'
import { RootState } from '@/store/interfaces/rootState'

export class AState {
  state: RootState

  constructor () {
    this.state = new InitialState()
  }

  withVehicles (vehicles: Array<any>): AState {
    this.state.vehicles = vehicles
    return this
  }

  build (): RootState {
    return this.state
  }
}
