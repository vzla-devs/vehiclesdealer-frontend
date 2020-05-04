export default function vehiclesClient (restClient: any) {
  function get (): any {
    return restClient.get('/vehicles')
  }
  return { get }
}
