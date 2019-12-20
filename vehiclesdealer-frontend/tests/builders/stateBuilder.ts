import { InitialState } from '@/store/models/initialState'
import { RootState } from '@/store/interfaces/rootState'
import { ErrorMessage } from '@/store/models/errorMessage'
import { NotificationMessage } from '@/store/models/notificationMessage'

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

  withErrorMessages (messages: Array<ErrorMessage>): AState {
    this.state.messages.error = messages
    return this
  }

  withNotificationMessages (messages: Array<NotificationMessage>): AState {
    this.state.messages.notification = messages
    return this
  }

  build (): RootState {
    return this.state
  }
}
