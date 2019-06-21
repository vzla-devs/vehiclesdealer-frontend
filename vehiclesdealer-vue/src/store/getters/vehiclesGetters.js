import { GET_AVAILABLE_VEHICLES } from '@/store/getters/gettersTypes'

export default {
  [GET_AVAILABLE_VEHICLES]: (state) => {
    return [ ...state.vehicles ]
  }
}
