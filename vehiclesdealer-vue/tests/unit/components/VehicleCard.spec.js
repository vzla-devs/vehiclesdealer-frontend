import { shallowMount } from '@vue/test-utils'
import VehicleCard from '@/components/VehicleCard'
import ImageStub from './stubs/ImageStub'

describe('VehicleCard.vue', () => {
    test('renders correctly', () => {
        const brand = 'anyBrand'
        const model = 'anyModel'
        const year = 2019
        const price = 9999
        const imageUrl = 'anyUrl'
        const wrapper = givenAVehicleCard().withProps({ brand, model, year, price, imageUrl }).build()

        expect(wrapper.find('img').attributes().src).toBe(imageUrl)
        expect(wrapper.find('.description').text()).toBe('anyBrand anyModel - 2019')
        expect(wrapper.find('.price').text()).toBe('9999 €')
    })

    function givenAVehicleCard () {
        const stubs = { 'v-img': ImageStub, 'v-card': true, 'v-card-title': true }
        let propsData = {}
        let wrapper

        function withProps(props) {
            propsData = { ...props }
            return self
        }

        function build () {
            wrapper = shallowMount(VehicleCard, { stubs, propsData })
            return wrapper
        }

        const self = {
            withProps,
            build
        }
        return self
    }
})