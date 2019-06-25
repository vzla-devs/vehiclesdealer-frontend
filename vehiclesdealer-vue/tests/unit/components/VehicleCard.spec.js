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
    
    it('shows an image', () => {
        const givenImageUrl = 'anyUrl'

        wrapper.setProps({ imageUrl: givenImageUrl })

        expect(wrapper.find('img').attributes().src).toBe(givenImageUrl)
    })

    it('shows a description', () => {
        const givenBrand = 'anyBrand'
        const givenModel = 'anyModel'
        const givenYear = 2019

        wrapper.setProps({ brand: givenBrand, model: givenModel, year: givenYear })

        expect(wrapper.find('.description').text()).toBe('anyBrand anyModel - 2019')
    })

    it('shows a price', () => {
        const givenPrice = 9999

        wrapper.setProps({ price: givenPrice })

        expect(wrapper.find('.price').text()).toBe('9999 €')
    })
})