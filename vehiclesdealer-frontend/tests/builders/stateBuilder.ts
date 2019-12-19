import { InitialState } from '@/store/models/initialState'
import { RootState } from '@/store/interfaces/rootState'
import { ErrorMessage } from '@/store/models/errorMessage'

export class AState {
  state: RootState

  constructor () {
    this.state = new InitialState()
  }

  withLoading (loading: boolean): AState {
    this.state.loading = loading
    return this
  }

  withVehicles (vehicles: Array<any>): AState {
    this.state.vehicles = vehicles
    return this
  }

  withErrorMessages (errorMessages: Array<ErrorMessage>): AState {
    this.state.messages.error = errorMessages
    return this
  }

  build (): RootState {
    return this.state
  }
}
