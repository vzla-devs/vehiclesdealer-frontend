import { ErrorMessage } from '@/store/models/errorMessage'
import { NotificationMessage } from '@/store/models/notificationMessage'
import { Vehicle } from '@/store/models/vehicle'

export interface RootState {
  loading: boolean,
  messages: {
    error: Array<ErrorMessage>,
    notification: Array<NotificationMessage>
  },
  vehicles: Array<Vehicle>
}
