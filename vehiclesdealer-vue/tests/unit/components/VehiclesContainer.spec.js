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

describe('VehiclesContainer.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  describe('when getting the vehicles', () => {
    it('shows an empty view when there are no vehicles', async () => {
      const givenVehicles = []
      const vehiclesContainer = AVehiclesContainer().withVehicles(givenVehicles).build()

      expect(vehiclesContainer.getAction(GET_VEHICLES)).toHaveBeenCalled()
      expect(vehiclesContainer.contains(GridLayout)).toBe(false)
      expect(vehiclesContainer.contains(NoData)).toBe(false)
      await flushPromises()
      expect(vehiclesContainer.contains(GridLayout)).toBe(false)
      expect(vehiclesContainer.contains(NoData)).toBe(true)
      expect(vehiclesContainer.find(NoData).props().message).toBe('No hay vehículos disponibles')
    })

    it('shows a grid of vehicles when there are vehicles', async () => {
      const givenVehicles = [
        givenAVehicle({ brand: 'firstBrand', model: 'firstModel', year: 2019, price: 9999, imageUrl: 'firstUrl' }),
        givenAVehicle({ brand: 'secondBrand', model: 'secondModel', year:  2019, price: 9999, imageUrl: 'secondUrl' }),
        givenAVehicle({ brand: 'thirdBrand', model: 'thirdModel', year: 2019, price: 9999, imageUrl: 'thirdUrl' })
      ]
      const vehiclesContainer = AVehiclesContainer().withVehicles(givenVehicles).build()

      expect(vehiclesContainer.getAction(GET_VEHICLES)).toHaveBeenCalled()
      expect(vehiclesContainer.contains(GridLayout)).toBe(false)
      await flushPromises()
      expect(vehiclesContainer.contains(NoData)).toBe(false)
      expect(vehiclesContainer.contains(GridLayout)).toBe(true)
      const expectedGrid = vehiclesContainer.find(GridLayout)
      const expectedVehicles = expectedGrid.findAll(VehicleCard)
      expect(expectedVehicles.length).toBe(3)
      verifyVehicleProps(expectedVehicles.at(0), givenVehicles[0])
      verifyVehicleProps(expectedVehicles.at(1), givenVehicles[1])
      verifyVehicleProps(expectedVehicles.at(2), givenVehicles[2])
    })

    it('shows an error banner when the action to get vehicles fails', async () => {
      const vehiclesContainer = AVehiclesContainer().withFailedAction().build()

      expect(vehiclesContainer.find(ErrorBanner).isVisible()).toBe(false)
      await flushPromises()
      expect(vehiclesContainer.find(ErrorBanner).isVisible()).toBe(true)
    })
  })

  describe('when events trigger callbacks', () => {
    it('hides the error banner when the onClose event is emitted', () => {
      const vehiclesContainer = AVehiclesContainer().isShowingErrorBanner().build()

      vehiclesContainer.find(ErrorBanner).vm.$emit('onClose')

      expect(vehiclesContainer.find(ErrorBanner).isVisible()).toBe(false)
    })
  })

  function AVehiclesContainer () {
    let vehicles = []
    const getters = {
      [GET_AVAILABLE_VEHICLES]: () => vehicles
    }
    const actions = {
      [GET_VEHICLES]: jest.fn()
    }
    const data = {
      showError: false
    }
    let wrapper

    function withVehicles (newVehicles) {
      vehicles = newVehicles
      return self
    }

    function withFailedAction () {
      actions[GET_VEHICLES] = () => Promise.reject()
      return self
    }

    function isShowingErrorBanner () {
      data.showError = true
      return self
    }

    function build () {
      const store = new Vuex.Store({ getters, actions })
      wrapper = shallowMount(VehiclesContainer, {
        data () { return data },
        store,
        localVue,
        stubs: ['v-alert']
      })
      return self
    }

    const self = {
      withVehicles,
      withFailedAction,
      isShowingErrorBanner,
      build,
      find: (element) => wrapper.find(element),
      findAll: (element) => wrapper.findAll(element),
      contains: (element) => wrapper.contains(element),
      getAction: (actionName) => actions[actionName]
    }
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