import flushPromises from 'flush-promises'

export function resolveAllPromises () {
  return flushPromises()
}

export function resolvedPromise (promiseResult) {
  return Promise.resolve(promiseResult)
}

export function rejectedPromise (promiseError) {
  return Promise.reject(promiseError)
}

export function actionToHaveBeenCalledWith (action, payload) {
  expect(action).toHaveBeenCalledWith(expect.any(Object), payload, undefined)
}
