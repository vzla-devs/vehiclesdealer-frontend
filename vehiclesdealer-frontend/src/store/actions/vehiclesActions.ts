import { VehiclesClient } from '@/clients/clientsFactory'
import { Action } from './types'
import { Mutation } from '@/store/mutations/types'
import { TryThisAction } from '@/store/actions/actionDecorators'

async function getVehicles ({ commit, dispatch }) {
  const response = await VehiclesClient.get()
  commit(Mutation.SET_VEHICLES, response.data)
}

const actions = {
  [Action.GET_VEHICLES]: TryThisAction(getVehicles)
}

export default actions
