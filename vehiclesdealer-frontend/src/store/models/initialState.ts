import { RootState } from '@/store/interfaces/rootState'
import { ErrorMessage } from '@/store/models/errorMessage'
import { NotificationMessage } from '@/store/models/notificationMessage'
import { Vehicle } from '@/store/models/vehicle'

export class InitialState implements RootState {
  loading: boolean
  vehicles: Array<Vehicle>
  messages: {
    error: Array<ErrorMessage>
    notification: Array<NotificationMessage>
  }

  constructor () {
    this.loading = false
    this.messages = {
      error: [],
      notification: []
    }
    this.vehicles = []
  }
}
