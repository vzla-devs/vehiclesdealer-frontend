import { Mutation } from '@/store/mutations/types'
import { ApplicationMessage } from '@/store/interfaces/applicationMessage'
import { Action } from './types'

export function TryThisAction (targetAction: Function) {
  return async function ({ commit, dispatch }: any): Promise<any> {
    commit(Mutation.SET_APPLICATION_LOADING, true)
    try {
      await targetAction({ commit, dispatch })
    } catch (error) {
      const errorMessage: ApplicationMessage = { type: 'error', message: 'ha ocurrido un error' }
      dispatch(Action.SHOW_MESSAGE, errorMessage)
    }
    commit(Mutation.SET_APPLICATION_LOADING, false)
  }
}
