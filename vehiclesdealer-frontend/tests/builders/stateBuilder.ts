import { InitialState } from '@/store/initialState'
import { RootState } from '@/store/interfaces/rootState'

export class AState {
  state: RootState

  constructor () {
    this.state = InitialState
  }

  withLoading (loading: RootState['loading']): AState {
    this.state.loading = loading
    return this
  }

  withVehicles (vehicles: RootState['vehicles']): AState {
    this.state.vehicles = vehicles
    return this
  }

  withErrorMessages (messages: RootState['messages']['error']): AState {
    this.state.messages.error = messages
    return this
  }

  withNotificationMessages (messages: RootState['messages']['notification']): AState {
    this.state.messages.notification = messages
    return this
  }

  build (): RootState {
    return this.state
  }
}
