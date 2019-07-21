import VehiclesContainer from '@/components/VehiclesContainer'
import GridLayout from '@/components/basic/GridLayout'
import VehicleCard from '@/components/VehicleCard'
import NoData from '@/components/basic/NoData'
import ErrorBanner from '@/components/basic/ErrorBanner'
import flushPromises from 'flush-promises'
import { wrapperBuilderFactory } from '@tests/helpers/factoryHelpers'
import { GET_AVAILABLE_VEHICLES } from '@/store/getters/gettersTypes'
import { GET_VEHICLES } from '@/store/actions/actionsTypes'

describe ('VehiclesContainer.vue', () => {
  const getters = {}
  const actions = {}

  describe ('when getting the vehicles', () => {
    beforeEach(() => {
      actions[GET_VEHICLES] = jest.fn(() => Promise.resolve())
    })

    it ('should display an empty view when there are no vehicles', async () => {
      getters[GET_AVAILABLE_VEHICLES] = () => []
      const wrapper = vehiclesContainerBuilder().withGetters(getters).withActions(actions).build()
  
      expect(wrapper.contains(GridLayout)).toBe(false)
      expect(wrapper.contains(NoData)).toBe(false)
      await flushPromises()
      expect(wrapper.contains(GridLayout)).toBe(false)
      expect(wrapper.contains(NoData)).toBe(true)
      expect(wrapper.find(NoData).props().message).toBe('No hay vehículos disponibles')
    })
  
    it ('should display a grid of vehicles when there are vehicles', async () => {
      const givenVehicles = [
        givenAVehicle({ brand: 'firstBrand', model: 'firstModel', year: 2019, price: 9999, imageUrl: 'firstUrl' }),
        givenAVehicle({ brand: 'secondBrand', model: 'secondModel', year:  2019, price: 9999, imageUrl: 'secondUrl' }),
        givenAVehicle({ brand: 'thirdBrand', model: 'thirdModel', year: 2019, price: 9999, imageUrl: 'thirdUrl' })
      ]
      getters[GET_AVAILABLE_VEHICLES] = () => givenVehicles

      const wrapper = vehiclesContainerBuilder().withGetters(getters).withActions(actions).build()

      expect(wrapper.contains(GridLayout)).toBe(false)
      await flushPromises()
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

  describe ('when getting the vehicles fails', () => {
    beforeEach(() => {
      getters[GET_AVAILABLE_VEHICLES] = () => []
      actions[GET_VEHICLES] = jest.fn(() => Promise.reject())
    })

    it ('should display an error banner', async () => {
      const wrapper = vehiclesContainerBuilder().withGetters(getters).withActions(actions).build()

      expect(wrapper.find(ErrorBanner).isVisible()).toBe(false)
      await flushPromises()
      expect(wrapper.find(ErrorBanner).isVisible()).toBe(true)
    })
  
    it ('should hide the error banner when the onClose event is emitted', async () => {
      const wrapper = vehiclesContainerBuilder().withGetters(getters).withActions(actions).build()
      await flushPromises()

      wrapper.find(ErrorBanner).vm.$emit('onClose')

      expect(wrapper.find(ErrorBanner).isVisible()).toBe(false)
    })
  })

  function vehiclesContainerBuilder () {
    return wrapperBuilderFactory({ component: VehiclesContainer, stubs: ['v-alert'] })
  }

  function givenAVehicle ({ brand = 'anyBrand', model = 'anyModel', year = 0, price = 0, imageUrl = 'anyUrl' } = {}) {
    return { brand, model, year, price, imageUrl }
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
