import { ApplicationMessage } from '@/store/interfaces/applicationMessage'
import { Vehicle } from '@/store/interfaces/vehicle'

export interface RootState {
  loading: boolean,
  messages: {
    error: Array<ApplicationMessage>,
    notification: Array<ApplicationMessage>
  },
  vehicles: Array<Vehicle>
}
