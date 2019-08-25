import vehiclesClient from '@/clients/vehiclesClient'
import { mockedRestClient } from '@tests/helpers/testHelpers'
import { BASE_URL } from '@/constants/serverRoutes'
import testValues from '@tests/helpers/testValues'

describe('vehiclesClient.js', () => {
  test('get all the vehicles', () => {
    const vehicles = [
      testValues.vehicle({ id: '1', brand: 'audi' }),
      testValues.vehicle({ id: '2', brand: 'volkswagen' })
    ]
    const restClient = mockedRestClient(vehicles)

    const result = vehiclesClient(restClient).get()

    expect(restClient.get).toHaveBeenCalledWith(`${BASE_URL}/vehicles`)
    expect(result).toBe(vehicles)
  })
})
