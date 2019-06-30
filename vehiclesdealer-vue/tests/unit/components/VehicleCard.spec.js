import VehicleCard from '@/components/VehicleCard'
import ImageStub from './stubs/ImageStub'
import { createWrapperFactory } from '@/helpers/factoryHelpers'

describe ('VehicleCard.vue', () => {

    it ('should render correctly', () => {
        const brand = 'anyBrand'
        const model = 'anyModel'
        const year = 2019
        const price = 9999
        const imageUrl = 'anyUrl'
        
        const wrapper = wrapperBuilder().withProps({ brand, model, year, price, imageUrl }).build()

        expect(wrapper.element).toMatchSnapshot()
    })

    function wrapperBuilder () {
        const stubs = { 'v-img': ImageStub, 'v-card': true, 'v-card-title': true }
        return createWrapperFactory({ component: VehicleCard, stubs })
    }
})