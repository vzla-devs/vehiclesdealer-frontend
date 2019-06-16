import vehiclesGetters from '@/store/getters/vehiclesGetters'
import { GET_VEHICLES } from '@/store/getters/gettersTypes'
import initialState from '@/store/initialState'

describe('vehiclesGetters.js', () => {
  test('get vehicles', () => {
    const vehicles = [
      {
        brand: 'firstBrand',
        model: 'firstModel',
        year: 2017,
        price: 7777,
        imageUrl: 'firstUrl'
      },
      {
        brand: 'secondBrand',
        model: 'secondModel',
        year: 2018,
        price: 8888,
        imageUrl: 'secondUrl'
      },
      {
        brand: 'thirdBrand',
        model: 'thirdModel',
        year: 2019,
        price: 9999,
        imageUrl: 'thirdUrl'
      }
    ]
    const state = Object.assign({}, initialState, { vehicles })
  
    const vehiclesFromGetter = vehiclesGetters[GET_VEHICLES](state)
  
    expect(vehiclesFromGetter).toEqual(vehicles)
    expect(vehiclesFromGetter).not.toBe(vehicles)
  })
})