import flushPromises from 'flush-promises'

export function resolvePromises () {
  return flushPromises()
}

export function actionToHaveBeenCalledWith (action, payload) {
  expect(action).toHaveBeenCalledWith(expect.any(Object), payload, undefined)
}
