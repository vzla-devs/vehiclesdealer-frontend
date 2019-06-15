import VehiclesView from '@/views/VehiclesView'
import GridLayout from '@/components/GridLayout'
import VehicleCard from '@/components/VehicleCard'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('VehiclesView.vue', () => {
  test('display a grid of vehicles', () => {
    const givenVehicles = [givenAVehicle(), givenAVehicle(), givenAVehicle()]
    const vehiclesView = AVehiclesView().withVehicles(givenVehicles).build()

    const grid = vehiclesView.find(GridLayout)
    expect(grid.exists()).toBe(true)
    expect(grid.findAll(VehicleCard).length).toBe(3)
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
      contains: (element) => wrapper.contains(element),
      findAll: (element) => wrapper.findAll(element)
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