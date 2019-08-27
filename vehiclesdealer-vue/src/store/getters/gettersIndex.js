import vehiclesGetters from './vehiclesGetters'
import messagesGetters from './messagesGetters'
import applicationGetters from './applicationGetters'

export default {
  ...vehiclesGetters,
  ...messagesGetters,
  ...applicationGetters
}
