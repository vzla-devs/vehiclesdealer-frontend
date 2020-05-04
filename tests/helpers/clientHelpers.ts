export function mockedRestClient (result?: any): any {
  return {
    get: jest.fn(() => result),
    post: jest.fn(),
    put: jest.fn()
  }
}
