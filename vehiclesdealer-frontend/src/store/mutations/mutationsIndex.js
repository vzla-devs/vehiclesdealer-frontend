import vehiclesMutations from './vehiclesMutations'
import messagesMutations from './messagesMutations'
import applicationMutations from './applicationMutations'

export default {
  ...vehiclesMutations,
  ...messagesMutations,
  ...applicationMutations
}
