import Vehicles from '@/views/Vehicles'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Vehicles.vue', () => {
  test('display the vehicles', () => {
    const vehicles = [ givenAVehicle(), givenAVehicle(), givenAVehicle() ]
    
    const vehiclesView = AVehiclesBuilder().withVehicles(vehicles).build()

    const vehicleCards = vehiclesView.findAll('.vehicle')
    expect(vehicleCards.length).toBe(3)
    verifyVehicle(vehicleCards.at(0), vehicles[0])
    verifyVehicle(vehicleCards.at(1), vehicles[1])
    verifyVehicle(vehicleCards.at(2), vehicles[2])
  })

  function AVehiclesBuilder () {
    let wrapper
    const state = {
      vehicles: []
    }
    const store = new Vuex.Store({ state })

    function withVehicles (vehicles) {
      state.vehicles = vehicles
      return self
    }

    function build () {
      wrapper = shallowMount(Vehicles, { store, localVue })
      return self
    }

    const self = {
      withVehicles,
      build,
      findAll: (element) => wrapper.findAll(element)
    }
    return self
  }

  function givenAVehicle () {
    return {
      brand: 'anyBrand',
      model: 'anyModel',
      year: 'anyYear',
      imageUrl: 'anyImageUrl'
    }
  }

  function verifyVehicle (vehicleToVerify, expectedVehicle) {
    expect(vehicleToVerify.props()).toEqual({
      brand: expectedVehicle.brand,
      model: expectedVehicle.model,
      year: expectedVehicle.year,
      imageUrl: expectedVehicle.imageUrl
    })
  }
})