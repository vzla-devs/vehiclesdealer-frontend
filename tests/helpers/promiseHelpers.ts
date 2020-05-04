export function resolveAllPromises (): Promise<any> {
  return new Promise(resolve => setImmediate(resolve))
}

export function resolvedPromise (promiseResult?: any): Promise<any> {
  return Promise.resolve(promiseResult)
}

export function rejectedPromise (promiseError?: any): Promise<any> {
  return Promise.reject(promiseError)
}
