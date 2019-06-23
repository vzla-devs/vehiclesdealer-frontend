import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { GET_AVAILABLE_VEHICLES } from '@/store/getters/gettersTypes'
import { GET_VEHICLES } from '@/store/actions/actionsTypes'
import VehiclesContainer from '@/components/VehiclesContainer'
import GridLayout from '@/components/basic/GridLayout'
import VehicleCard from '@/components/VehicleCard'
import NoData from '@/components/basic/NoData'
import flushPromises from 'flush-promises'

describe('VehiclesContainer.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  test('call action to get vehicles when creating the component', () => {
    const vehiclesContainer = AVehiclesContainer().build()

    expect(vehiclesContainer.getAction(GET_VEHICLES)).toHaveBeenCalled()
  })

  test('display error message when the action fails', async () => {
    const vehiclesContainer = AVehiclesContainer().withFailedAction().build()

    expect(vehiclesContainer.find('.error-alert').isVisible()).toBe(false)
    await flushPromises()
    expect(vehiclesContainer.find('.error-alert').isVisible()).toBe(true)
    expect(vehiclesContainer.find('.error-alert').text()).toBe('Ha ocurrido un error')
  })

  test('display an empty view when there are no vehicles', async () => {
    const givenVehicles = []
    const vehiclesContainer = AVehiclesContainer().withVehicles(givenVehicles).build()

    expect(vehiclesContainer.find(NoData).exists()).toBe(false)
    await flushPromises()
    expect(vehiclesContainer.contains(GridLayout)).toBe(false)
    expect(vehiclesContainer.find(NoData).props().message).toBe('No hay vehículos disponibles')
  })

  test('display a grid of vehicles', () => {
    const givenVehicles = [givenAVehicle(), givenAVehicle(), givenAVehicle()]
    const vehiclesContainer = AVehiclesContainer().withVehicles(givenVehicles).build()

    expect(vehiclesContainer.contains(GridLayout)).toBe(true)
    const expectedGrid = vehiclesContainer.find(GridLayout)
    expect(expectedGrid.findAll(VehicleCard).length).toBe(3)
    expect(vehiclesContainer.contains(NoData)).toBe(false)
  })

  test('display a grid of vehicles with their corresponding props', () => {
    const givenVehicles = [
      givenAVehicle({ brand: 'firstBrand', model: 'firstModel', year: 2019, price: 9999, imageUrl: 'firstUrl' }),
      givenAVehicle({ brand: 'secondBrand', model: 'secondModel', year:  2019, price: 9999, imageUrl: 'secondUrl' }),
      givenAVehicle({ brand: 'thirdBrand', model: 'thirdModel', year: 2019, price: 9999, imageUrl: 'thirdUrl' })
    ]

    const vehiclesContainer = AVehiclesContainer().withVehicles(givenVehicles).build()

    const expectedVehicles = vehiclesContainer.findAll(VehicleCard)
    verifyVehicleProps(expectedVehicles.at(0), givenVehicles[0])
    verifyVehicleProps(expectedVehicles.at(1), givenVehicles[1])
    verifyVehicleProps(expectedVehicles.at(2), givenVehicles[2])
  })

  function AVehiclesContainer () {
    let vehicles = []
    const getters = {
      [GET_AVAILABLE_VEHICLES]: () => vehicles
    }
    const actions = {
      [GET_VEHICLES]: jest.fn()
    }
    let wrapper

    function withVehicles (newVehicles) {
      vehicles = newVehicles
      return self
    }

    function withFailedAction () {
      actions[GET_VEHICLES] = () => Promise.reject('sssss')
      return self
    }

    function build () {
      const store = new Vuex.Store({ getters, actions })
      wrapper = shallowMount(VehiclesContainer, {
        store,
        localVue,
        stubs: ['v-alert']
      })
      return self
    }

    const self = {
      withVehicles,
      withFailedAction,
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