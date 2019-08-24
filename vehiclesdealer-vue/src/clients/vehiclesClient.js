import { BASE_URL } from '@/constants/serverRoutes'
const GET_VEHICLES_URL = `${BASE_URL}/vehicles`

export default function vehiclesClient (restClient) {
  function get () {
    return restClient.get(GET_VEHICLES_URL)
  }

  return {
    get
  }
}
