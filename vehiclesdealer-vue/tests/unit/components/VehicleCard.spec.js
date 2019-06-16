import { shallowMount } from '@vue/test-utils'
import VehicleCard from '@/components/VehicleCard'
import ImageStub from './stubs/ImageStub'

describe('VehicleCard.vue', () => {
    let wrapper
    
    beforeEach(() => {
        wrapper = shallowMount(VehicleCard, {
            stubs: {
                'v-img': ImageStub,
                'v-card': true,
                'v-card-title': true
            }
        })
    })
    
    test('displays an image', () => {
        const imageUrl = 'anyUrl'

        wrapper.setProps({ imageUrl })

        expect(wrapper.find('img').attributes().src).toBe(imageUrl)
    })

    test('displays a description', () => {
        const brand = 'anyBrand'
        const model = 'anyModel'
        const year = 2019

        wrapper.setProps({ brand, model, year })

        expect(wrapper.find('.description').text()).toBe('anyBrand anyModel - 2019')
    })

    test('displays a price', () => {
        const price = 9999

        wrapper.setProps({ price })

        expect(wrapper.find('.price').text()).toBe('9999 €')
    })
})