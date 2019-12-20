export function resolveAllPromises () {
  return new Promise(resolve => setImmediate(resolve))
}

export function resolvedPromise (promiseResult) {
  return Promise.resolve(promiseResult)
}

export function rejectedPromise (promiseError) {
  return Promise.reject(promiseError)
}

export function mockedRestClient (result = {}) {
  return {
    get: jest.fn(() => result),
    post: jest.fn(),
    put: jest.fn()
  }
}

export function actionToHaveBeenCalledWith (action, payload) {
  expect(action).toHaveBeenCalledWith(expect.any(Object), payload, undefined)
}
