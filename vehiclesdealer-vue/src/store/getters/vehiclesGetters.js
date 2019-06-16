import { GET_VEHICLES } from '@/store/getters/gettersTypes'

export default {
  [GET_VEHICLES]: (state) => {
    return [ ...state.vehicles ]
  }
}
