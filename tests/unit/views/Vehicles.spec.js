import Vehicles from '@/views/Vehicles'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Vehicles.vue', () => {
  test('display the vehicles', () => {
    const vehicles = [
      givenAVehicle(),
      givenAVehicle(),
      givenAVehicle()
    ]
    
    const vehiclesView = AVehiclesBuilder().withVehicles(vehicles).build()

    const vehicleCards = vehiclesView.findAll('.vehicle')
    expect(vehicleCards.length).toBe(3)
    expect(vehicleCards.at(0).props()).toEqual({
      brand: vehicles[0].brand,
      model: vehicles[0].model,
      year: vehicles[0].year,
      imageUrl: vehicles[0].imageUrl
    })
    expect(vehicleCards.at(1).props()).toEqual({
      brand: vehicles[1].brand,
      model: vehicles[1].model,
      year: vehicles[1].year,
      imageUrl: vehicles[1].imageUrl
    })
    expect(vehicleCards.at(2).props()).toEqual({
      brand: vehicles[2].brand,
      model: vehicles[2].model,
      year: vehicles[2].year,
      imageUrl: vehicles[2].imageUrl
    })
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
})