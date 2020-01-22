import VehiclesContainer from '@/components/VehiclesContainer.vue'
import GridLayout from '@/layouts/GridLayout.vue'
import Card from '@/components/Card.vue'
import { AComponent } from '@tests/helpers/builderHelpers'
import {
  resolveAllPromises,
  resolvedPromise
} from '@tests/helpers/testHelpers'
import { Action } from '@/store/actions/types'
import { Getter } from '@/store/getters/types'
import { Vehicle } from '@/store/interfaces/vehicle'

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
    })

    it('displays a loaded view without vehicles', async () => {
      const getters = {
        [Getter.AVAILABLE_VEHICLES]: () => [],
        [Getter.IS_LOADING]: () => false
      }

      const wrapper = AVehiclesContainer().withGetters(getters).build()
      await resolveAllPromises()

      expect(wrapper.contains(GridLayout)).toBe(false)
    })

    it('displays a grid of vehicles when there are vehicles', async () => {
      const firstVehicle: Vehicle = { id: '1', brand: 'firstBrand', model: 'firstModel', year: 2020, price: 9999, imageUrl: 'firstUrl' }
      const secondVehicle: Vehicle = { id: '2', brand: 'secondBrand', model: 'secondModel', year: 2019, price: 9999, imageUrl: 'secondUrl' }
      const thirdVehicle: Vehicle = { id: '3', brand: 'thirdBrand', model: 'thirdModel', year: 2018, price: 9999, imageUrl: 'thirdUrl' }
      const givenVehicles = [ firstVehicle, secondVehicle, thirdVehicle ]
      const getters = { [Getter.AVAILABLE_VEHICLES]: () => givenVehicles }

      const wrapper = AVehiclesContainer().withGetters(getters).build()

      await resolveAllPromises()
      expect(wrapper.contains(GridLayout)).toBe(true)
      const expectedGrid = wrapper.find(GridLayout)
      const expectedVehicles = expectedGrid.findAll(Card)
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
      title: `${expectedVehicle.brand} ${expectedVehicle.model} - ${expectedVehicle.year}`,
      price: expectedVehicle.price,
      image: expectedVehicle.imageUrl
    })
  }
})
