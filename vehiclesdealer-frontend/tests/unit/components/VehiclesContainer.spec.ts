import VehiclesContainer from '@/components/VehiclesContainer.vue'
import GridLayout from '@/layouts/GridLayout.vue'
import VehicleCard from '@/components/VehicleCard.vue'
import NoData from '@/components/basic/NoData.vue'
import { AComponent } from '@tests/helpers/builderHelpers'
import {
  resolveAllPromises,
  resolvedPromise
} from '@tests/helpers/testHelpers'
import testValues from '@tests/helpers/testValues'
import { Action } from '@/store/actions/types'
import { Getter } from '@/store/getters/types'

describe('VehiclesContainer.vue', () => {
  describe('when getting the vehicles', () => {
    it('calls the corresponding action to get the vehicles', async () => {
      const actions = {
        [Action.GET_VEHICLES]: jest.fn(() => resolvedPromise())
      }

      AVehiclesContainer().withActions(actions).build()

      await resolveAllPromises()
      expect(actions[Action.GET_VEHICLES]).toHaveBeenCalled()
    })

    it('displays a loading view without vehicles', async () => {
      const getters = {
        [Getter.AVAILABLE_VEHICLES]: () => [],
        [Getter.IS_LOADING]: () => true
      }

      const wrapper = AVehiclesContainer().withGetters(getters).build()

      expect(wrapper.contains(GridLayout)).toBe(false)
      expect(wrapper.contains(NoData)).toBe(false)
    })

    it('displays a loaded view without vehicles', async () => {
      const getters = {
        [Getter.AVAILABLE_VEHICLES]: () => [],
        [Getter.IS_LOADING]: () => false
      }

      const wrapper = AVehiclesContainer().withGetters(getters).build()
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
      const getters = {
        [Getter.AVAILABLE_VEHICLES]: () => givenVehicles
      }

      const wrapper = AVehiclesContainer().withGetters(getters).build()
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

  function AVehiclesContainer () {
    const getters = {
      [Getter.AVAILABLE_VEHICLES]: () => [],
      [Getter.IS_LOADING]: () => false
    }
    const actions = {
      [Action.GET_VEHICLES]: () => resolvedPromise()
    }
    return AComponent(VehiclesContainer).withGetters(getters).withActions(actions)
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
