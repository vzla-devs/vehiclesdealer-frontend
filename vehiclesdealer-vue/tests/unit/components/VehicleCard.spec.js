import { shallowMount } from '@vue/test-utils'
import VehicleCard from '@/components/VehicleCard'
import ImageStub from './stubs/ImageStub'

describe('VehicleCard.vue', () => {
    test('displays an image', () => {
        const imageUrl = 'anyUrl'
        const vehicleCard = AVehicleCard().build()

        vehicleCard.setProps({ imageUrl })

        expect(vehicleCard.find('img').attributes().src).toBe(imageUrl)
    })

    test('displays a description', () => {
        const brand = 'anyBrand'
        const model = 'anyModel'
        const year = 2019
        const vehicleCard = AVehicleCard().build()

        vehicleCard.setProps({ brand, model, year })

        expect(vehicleCard.find('.description').text()).toBe('anyBrand anyModel - 2019')
    })

    test('displays a price', () => {
        const price = 9999
        const vehicleCard = AVehicleCard().build()

        vehicleCard.setProps({ price })

        expect(vehicleCard.find('.price').text()).toBe('9999 €')
    })

    function AVehicleCard () {
        let wrapper

        function build () {
            wrapper = shallowMount(VehicleCard, {
                stubs: {
                    'v-img': ImageStub,
                    'v-card': true,
                    'v-card-title': true
                }
            })
            return self
        }

        const self = {
            build,
            find: (element) => wrapper.find(element),
            setProps: (props) => wrapper.setProps(props)
        }
        return self
    }
})