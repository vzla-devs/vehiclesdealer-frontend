import { RootState } from '@/store/interfaces/rootState'

export const InitialState: RootState = {
  loading: false,
  messages: {
    error: [],
    notification: []
  },
  vehicles: []
}
