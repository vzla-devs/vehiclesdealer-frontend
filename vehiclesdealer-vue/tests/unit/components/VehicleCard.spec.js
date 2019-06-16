import { shallowMount } from '@vue/test-utils'
import VehicleCard from '@/components/VehicleCard'
import ImageStub from './stubs/ImageStub'

describe('VehicleCard.vue', () => {
    test('displays an image', () => {
        const url = 'anyUrl'
        const vehicleCard = AVehicleCard().withImageUrl(url).build()

        expect(vehicleCard.find('img').attributes().src).toBe(url)
    })

    function AVehicleCard () {
        let wrapper
        let imageUrl

        function withImageUrl (url) {
            imageUrl = url
            return self
        }

        function build () {
            wrapper = shallowMount(VehicleCard, {
                stubs: {
                    'v-img': ImageStub,
                    'v-card': true,
                    'v-card-title': true
                },
                propsData: { imageUrl }
            })
            return self
        }

        const self = {
            withImageUrl,
            build,
            find: (element) => wrapper.find(element)
        }
        return self
    }
})