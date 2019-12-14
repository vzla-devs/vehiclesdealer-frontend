import { MESSAGE_TYPES } from '@/constants/enums'

export default {
  loading: false,
  messages: {
    [MESSAGE_TYPES.ERROR]: [],
    [MESSAGE_TYPES.NOTIFICATION]: []
  },
  vehicles: []
}
