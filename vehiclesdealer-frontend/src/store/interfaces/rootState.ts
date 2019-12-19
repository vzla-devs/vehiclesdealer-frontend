import { ErrorMessage } from '@/store/models/errorMessage'
import { NotificationMessage } from '@/store/models/notificationMessage'

export interface RootState {
  loading: boolean,
  messages: {
    error: Array<ErrorMessage>,
    notification: Array<NotificationMessage>
  },
  vehicles: Array<any>
}
