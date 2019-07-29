import { AVAILABLE_VEHICLES } from '@/store/getters/getterTypes'

export default {
  [AVAILABLE_VEHICLES]: (state) => {
    return [ ...state.vehicles ]
  }
}
