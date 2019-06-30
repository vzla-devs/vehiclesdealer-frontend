import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { GET_AVAILABLE_VEHICLES } from '@/store/getters/gettersTypes'
import { GET_VEHICLES } from '@/store/actions/actionsTypes'
import VehiclesContainer from '@/components/VehiclesContainer'
import GridLayout from '@/components/basic/GridLayout'
import VehicleCard from '@/components/VehicleCard'
import NoData from '@/components/basic/NoData'
import ErrorBanner from '@/components/basic/ErrorBanner'
import flushPromises from 'flush-promises'

describe ('VehiclesContainer.vue', () => {
  const getters = {}
  const actions = {}
  const localVue = createLocalVue()
  localVue.use(Vuex)

  beforeEach(() => {
    getters[GET_AVAILABLE_VEHICLES] = () => []
    actions[GET_VEHICLES] = jest.fn(() => Promise.resolve())
  })

  describe ('when getting the vehicles', () => {

    it ('should display an empty view when there are no vehicles', async () => {
      const wrapper = factory().build()
  
      expect(actions[GET_VEHICLES]).toHaveBeenCalled()
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
      const wrapper = factory().build()
  
      expect(actions[GET_VEHICLES]).toHaveBeenCalled()
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
      actions[GET_VEHICLES] = jest.fn(() => Promise.reject())
    })

    it ('should display an error banner', async () => {
      const wrapper = factory().build()
  
      expect(actions[GET_VEHICLES]).toHaveBeenCalled()
      expect(wrapper.find(ErrorBanner).isVisible()).toBe(false)
      await flushPromises()
      expect(wrapper.find(ErrorBanner).isVisible()).toBe(true)
    })
  
    it ('should hide the error banner when the onClose event is emitted', async () => {
      const vehiclesContainer = factory().build()
      await flushPromises()
  
      vehiclesContainer.find(ErrorBanner).vm.$emit('onClose')
  
      expect(vehiclesContainer.find(ErrorBanner).isVisible()).toBe(false)
    })
  })

  function factory () {
    function build () {
      const store = new Vuex.Store({ getters, actions })
      return shallowMount(VehiclesContainer, { localVue, store, stubs: ['v-alert'] })
    }

    const self = { build }
    return self
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
