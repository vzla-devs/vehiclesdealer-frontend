import { InitialState } from '@/store/initialState'
import { ApplicationMessage } from '@/store/interfaces/applicationMessage'
import { Vehicle } from '@/store/interfaces/vehicle'
import { RootState } from '@/store/interfaces/rootState'

export class AState {
  state: RootState

  constructor () {
    this.state = InitialState
  }

  withLoading (loading: boolean): AState {
    this.state.loading = loading
    return this
  }

  withVehicles (vehicles: Array<Vehicle>): AState {
    this.state.vehicles = vehicles
    return this
  }

  withErrorMessages (messages: Array<ApplicationMessage>): AState {
    this.state.messages.error = messages
    return this
  }

  withNotificationMessages (messages: Array<ApplicationMessage>): AState {
    this.state.messages.notification = messages
    return this
  }

  build (): RootState {
    return this.state
  }
}
