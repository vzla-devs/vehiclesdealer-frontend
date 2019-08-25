import vehiclesClient from '@/clients/vehiclesClient'
import { mockedRestClient } from '@tests/helpers/testHelpers'
import { BASE_URL } from '@/constants/serverRoutes'

describe('vehiclesClient.js', () => {
  test('get all the vehicles', () => {
    const vehicles = [{ id: '1', brand: 'audi' }, { id: '2', brand: 'volkswagen' }]
    const restClient = mockedRestClient(vehicles)

    const result = vehiclesClient(restClient).get()

    expect(restClient.get).toHaveBeenCalledWith(`${BASE_URL}/vehicles`)
    expect(result).toBe(vehicles)
  })
})
