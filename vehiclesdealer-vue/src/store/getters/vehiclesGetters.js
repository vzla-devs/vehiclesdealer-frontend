import { AVAILABLE_VEHICLES } from '@/store/getters/gettersTypes'

export default {
  [AVAILABLE_VEHICLES]: (state) => {
    return [ ...state.vehicles ]
  }
}
