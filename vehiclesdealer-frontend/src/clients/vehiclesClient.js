export default function vehiclesClient (restClient) {
  function get () {
    return restClient.get('/vehicles')
  }

  return {
    get
  }
}
