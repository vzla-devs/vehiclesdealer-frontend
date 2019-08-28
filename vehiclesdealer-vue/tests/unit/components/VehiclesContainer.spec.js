import VehiclesContainer from '@/components/VehiclesContainer.vue'
import GridLayout from '@/layouts/GridLayout.vue'
import VehicleCard from '@/components/VehicleCard.vue'
import NoData from '@/components/basic/NoData.vue'
import { componentBuilder } from '@tests/helpers/builderHelpers'
import { AVAILABLE_VEHICLES, LOADING_VEHICLES } from '@/store/getters/getterTypes'
import { GET_VEHICLES } from '@/store/actions/actionTypes'
import {
  resolveAllPromises,
  resolvedPromise
} from '@tests/helpers/testHelpers'
import testValues from '@tests/helpers/testValues'

describe('VehiclesContainer.vue', () => {
  describe('when getting the vehicles', () => {
    it('calls the corresponding action to get the vehicles', async () => {
      const actions = {}
      actions[GET_VEHICLES] = jest.fn(() => resolvedPromise())

      aVehiclesContainer().withActions(actions).build()
      await resolveAllPromises()

      expect(actions[GET_VEHICLES]).toHaveBeenCalled()
    })

    it('displays a loading view without vehicles', async () => {
      const getters = {}
      getters[AVAILABLE_VEHICLES] = () => []
      getters[LOADING_VEHICLES] = () => true

      const wrapper = aVehiclesContainer().withGetters(getters).build()

      expect(wrapper.contains(GridLayout)).toBe(false)
      expect(wrapper.contains(NoData)).toBe(false)
    })

    it('displays a loaded view without vehicles', async () => {
      const getters = {}
      getters[AVAILABLE_VEHICLES] = () => []
      getters[LOADING_VEHICLES] = () => false

      const wrapper = aVehiclesContainer().withGetters(getters).build()
      await resolveAllPromises()

      expect(wrapper.contains(GridLayout)).toBe(false)
      expect(wrapper.contains(NoData)).toBe(true)
      expect(wrapper.find(NoData).props().message).toBe('No hay vehículos disponibles')
    })

    it('displays a grid of vehicles when there are vehicles', async () => {
      const givenVehicles = [
        testValues.vehicle({ brand: 'firstBrand', model: 'firstModel', year: 2019, price: 9999, imageUrl: 'firstUrl' }),
        testValues.vehicle({ brand: 'secondBrand', model: 'secondModel', year: 2019, price: 9999, imageUrl: 'secondUrl' }),
        testValues.vehicle({ brand: 'thirdBrand', model: 'thirdModel', year: 2019, price: 9999, imageUrl: 'thirdUrl' })
      ]
      const getters = {}
      getters[AVAILABLE_VEHICLES] = () => givenVehicles

      const wrapper = aVehiclesContainer().withGetters(getters).build()
      await resolveAllPromises()

      expect(wrapper.contains(NoData)).toBe(false)
      expect(wrapper.contains(GridLayout)).toBe(true)
      const expectedGrid = wrapper.find(GridLayout)
      const expectedVehicles = expectedGrid.findAll(VehicleCard)
      expect(expectedVehicles.length).toBe(3)
      verifyVehicleProps(expectedVehicles.at(0), givenVehicles[0])
      verifyVehicleProps(expectedVehicles.at(1), givenVehicles[1])
      verifyVehicleProps(expectedVehicles.at(2), givenVehicles[2])
    })
  })

  function aVehiclesContainer () {
    const getters = {}
    getters[AVAILABLE_VEHICLES] = () => []
    getters[LOADING_VEHICLES] = () => false
    const actions = {}
    actions[GET_VEHICLES] = () => resolvedPromise()
    return componentBuilder(VehiclesContainer).withGetters(getters).withActions(actions)
  }

  function verifyVehicleProps (vehicleToVerify, expectedVehicle) {
    expect(vehicleToVerify.props()).toEqual({
      brand: expectedVehicle.brand,
      model: expectedVehicle.model,
      year: expectedVehicle.year,
      price: expectedVehicle.price,
      imageUrl: expectedVehicle.imageUrl
    })
  }
})
