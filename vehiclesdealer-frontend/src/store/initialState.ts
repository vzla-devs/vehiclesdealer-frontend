import { RootState } from '@/store/models/rootState'

export const InitialState: RootState = {
  loading: false,
  messages: {
    error: [],
    notification: []
  },
  vehicles: []
}
