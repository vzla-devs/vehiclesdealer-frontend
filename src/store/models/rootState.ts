import { ApplicationMessage } from '@/store/models/applicationMessage'
import { Vehicle } from '@/store/models/vehicle'

export interface RootState {
  loading: boolean,
  messages: {
    error: Array<ApplicationMessage>,
    notification: Array<ApplicationMessage>
  },
  vehicles: Array<Vehicle>
}
