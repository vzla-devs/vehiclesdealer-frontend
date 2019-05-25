import VehiclesView from '@/views/VehiclesView'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('VehiclesView.vue', () => {
  test('display the vehicles', () => {
    const vehicles = [
      givenAVehicle('firstBrand', 'firstModel', 2019, 9999, 'firstUrl'),
      givenAVehicle('secondBrand', 'secondModel', 2019, 9999, 'secondUrl'),
      givenAVehicle('thirdBrand', 'thirdModel', 2019, 9999,'thirdUrl')
    ]
    
    const vehiclesView = AVehiclesViewBuilder().withVehicles(vehicles).build()

    const vehicleCards = vehiclesView.findAll('.vehicle')
    expect(vehicleCards.length).toBe(3)
    verifyVehicle(vehicleCards.at(0), vehicles[0])
    verifyVehicle(vehicleCards.at(1), vehicles[1])
    verifyVehicle(vehicleCards.at(2), vehicles[2])
  })

  function AVehiclesViewBuilder () {
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

  function verifyVehicle (vehicleToVerify, expectedVehicle) {
    expect(vehicleToVerify.props()).toEqual({
      brand: expectedVehicle.brand,
      model: expectedVehicle.model,
      year: expectedVehicle.year,
      price: expectedVehicle.price,
      imageUrl: expectedVehicle.imageUrl
    })
  }
})