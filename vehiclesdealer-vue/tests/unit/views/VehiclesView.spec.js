import { shallowMount, createLocalVue } from '@vue/test-utils'
import VehiclesView from '@/views/VehiclesView'
import GridLayout from '@/components/basic/GridLayout'
import VehicleCard from '@/components/VehicleCard'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('VehiclesView.vue', () => {
  test('display an empty view when there are no vehicles', () => {
    const givenVehicles = []
    const vehiclesView = AVehiclesView().withVehicles(givenVehicles).build()

    expect(vehiclesView.contains(GridLayout)).toBe(false)
    expect(vehiclesView.contains('#no-vehicles')).toBe(true)
    expect(vehiclesView.find('#no-vehicles').text()).toBe('No hay vehículos disponibles')
  })

  test('display a grid of vehicles', () => {
    const givenVehicles = [givenAVehicle(), givenAVehicle(), givenAVehicle()]
    const vehiclesView = AVehiclesView().withVehicles(givenVehicles).build()

    expect(vehiclesView.contains(GridLayout)).toBe(true)
    const grid = vehiclesView.find(GridLayout)
    expect(grid.findAll(VehicleCard).length).toBe(3)
    expect(vehiclesView.contains('#no-vehicles')).toBe(false)
  })

  test('display vehicles with their corresponding props', () => {
    const givenVehicles = [
      givenAVehicle({ brand: 'firstBrand', model: 'firstModel', year: 2019, price: 9999, imageUrl: 'firstUrl' }),
      givenAVehicle({ brand: 'secondBrand', model: 'secondModel', year:  2019, price: 9999, imageUrl: 'secondUrl' }),
      givenAVehicle({ brand: 'thirdBrand', model: 'thirdModel', year: 2019, price: 9999, imageUrl: 'thirdUrl' })
    ]
    const vehiclesView = AVehiclesView().withVehicles(givenVehicles).build()

    const vehicles = vehiclesView.findAll(VehicleCard)
    verifyVehicleProps(vehicles.at(0), givenVehicles[0])
    verifyVehicleProps(vehicles.at(1), givenVehicles[1])
    verifyVehicleProps(vehicles.at(2), givenVehicles[2])
  })

  function AVehiclesView () {
    const state = { vehicles: [] }
    const store = new Vuex.Store({ state })
    let wrapper

    function withVehicles (vehicles) {
      state.vehicles = vehicles
      return self
    }

    function build () {
      wrapper = shallowMount(VehiclesView, { store, localVue })
      return self
    }

    const self = {
      withVehicles,
      build,
      find: (element) => wrapper.find(element),
      findAll: (element) => wrapper.findAll(element),
      contains: (element) => wrapper.contains(element)
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