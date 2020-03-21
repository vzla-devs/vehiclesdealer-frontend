export function resolveAllPromises (): Promise<any> {
  return new Promise(resolve => setImmediate(resolve))
}

export function resolvedPromise (promiseResult?: any): Promise<any> {
  return Promise.resolve(promiseResult)
}

export function rejectedPromise (promiseError?: any): Promise<any> {
  return Promise.reject(promiseError)
}

export function mockedRestClient (result?: any): any {
  return {
    get: jest.fn(() => result),
    post: jest.fn(),
    put: jest.fn()
  }
}

export function actionToHaveBeenCalledWith (action: any, payload: any): void {
  expect(action).toHaveBeenCalledWith(expect.any(Object), payload, undefined)
}
