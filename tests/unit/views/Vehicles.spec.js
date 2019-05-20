import Vehicles from '@/views/Vehicles'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Vehicles.vue', () => {
  test('display the vehicles', () => {
    const vehicles = [
      {
        brand: 'anyBrand',
        model: 'anyModel',
        year: 'anyYear',
        imageUrl: 'anyImageUrl'
      },
      {
        brand: 'anyBrand',
        model: 'anyModel',
        year: 'anyYear',
        imageUrl: 'anyImageUrl'
      },
      {
        brand: 'anyBrand',
        model: 'anyModel',
        year: 'anyYear',
        imageUrl: 'anyImageUrl'
      }
    ]
    
    const vehiclesView = AVehiclesBuilder().withVehicles(vehicles).build()

    expect(vehiclesView.findAll('.vehicle').length).toBe(3)
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
})