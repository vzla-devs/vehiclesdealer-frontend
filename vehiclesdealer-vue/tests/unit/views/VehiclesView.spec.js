import VehiclesView from '@/views/VehiclesView'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('VehiclesView.vue', () => {
  test('display the vehicles with their corresponding props', () => {
    const givenVehicles = [
      givenAVehicle('firstBrand', 'firstModel', 2019, 9999, 'firstUrl'),
      givenAVehicle('secondBrand', 'secondModel', 2019, 9999, 'secondUrl'),
      givenAVehicle('thirdBrand', 'thirdModel', 2019, 9999,'thirdUrl')
    ]
    const vehiclesView = AVehiclesView().withVehicles(givenVehicles).build()

    const vehicles = vehiclesView.findAll('.vehicle')
    expect(vehicles.length).toBe(3)
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
      findAll: (element) => wrapper.findAll(element)
    }
    return self
  }

  function givenAVehicle (brand, model, year, price, imageUrl) {
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