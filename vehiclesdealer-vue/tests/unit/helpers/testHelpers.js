import flushPromises from 'flush-promises'

export function resolveAllPromises () {
  return flushPromises()
}

export function actionToHaveBeenCalledWith (action, payload) {
  expect(action).toHaveBeenCalledWith(expect.any(Object), payload, undefined)
}
