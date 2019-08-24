import flushPromises from 'flush-promises'

export function resolveAllPromises () {
  return flushPromises()
}

export function resolvedPromise (promiseResult) {
  return jest.fn(() => Promise.resolve(promiseResult))
}

export function rejectedPromise (promiseError) {
  return jest.fn(() => Promise.reject(promiseError))
}

export function actionToHaveBeenCalledWith (action, payload) {
  expect(action).toHaveBeenCalledWith(expect.any(Object), payload, undefined)
}
