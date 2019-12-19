import { RootState } from '@/store/interfaces/rootState'
import { ErrorMessage } from '@/store/models/errorMessage'
import { NotificationMessage } from '@/store/models/notificationMessage'

export class InitialState implements RootState {
  loading: boolean
  vehicles: Array<any>
  messages: {
    error: ErrorMessage[]
    notification: NotificationMessage[]
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
