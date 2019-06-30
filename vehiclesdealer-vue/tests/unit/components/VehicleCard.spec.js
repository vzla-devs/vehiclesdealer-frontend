import { shallowMount } from '@vue/test-utils'
import VehicleCard from '@/components/VehicleCard'
import ImageStub from './stubs/ImageStub'

describe ('VehicleCard.vue', () => {

    it ('should render correctly', () => {
        const brand = 'anyBrand'
        const model = 'anyModel'
        const year = 2019
        const price = 9999
        const imageUrl = 'anyUrl'
        
        const wrapper = factory().withProps({ brand, model, year, price, imageUrl }).build()

        expect(wrapper.element).toMatchSnapshot()
    })

    function factory () {
        let propsData = {}

        function withProps (props) {
            propsData = { ...props }
            return self
        }

        function build () {
            const stubs = { 'v-img': ImageStub, 'v-card': true, 'v-card-title': true }
            return shallowMount(VehicleCard, { stubs, propsData })
        }

        const self = {
            withProps,
            build
        }
        return self
    }
})