import vehiclesActions from '@/store/actions/vehiclesActions'
import { GET_VEHICLES } from '@/store/actions/actionsTypes'
import { SET_VEHICLES } from '@/store/mutations/mutationsTypes'
import { GET_VEHICLES_URL } from '@/constants/serverRoutes'
import axios from 'axios'

jest.mock('axios')

describe('vehiclesActions.js', () => {
  test('get vehicles from the API and then commit the corresponding mutation', async () => {
    const mockCommit = jest.fn()
    const context = { 'commit': mockCommit }
    const vehicles = [
      givenAVehicleFromAPI({ brand: 'anyBrand', model: 'anyModel', year: 2019, price: 9999, imageUrl: 'anyUrl' })
    ]
    axios.get.mockImplementation(() => Promise.resolve(vehicles))

    vehiclesActions[GET_VEHICLES](context)

    expect(context.commit).not.toHaveBeenCalledWith(SET_VEHICLES, vehicles)
    await expect(axios.get).toHaveBeenCalledWith(GET_VEHICLES_URL)
    expect(context.commit).toHaveBeenCalledWith(SET_VEHICLES, vehicles)
  })

  function givenAVehicleFromAPI ({ brand, model, year, price, imageUrl }) {
    return { brand, model, year, price, imageUrl }
  }
})
