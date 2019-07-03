import VehicleCard from '@/components/VehicleCard'
import ImageStub from './stubs/ImageStub'
import { wrapperBuilderFactory } from '@/helpers/factoryHelpers'

describe ('VehicleCard.vue', () => {

    it ('should render correctly', () => {
        const brand = 'anyBrand'
        const model = 'anyModel'
        const year = 2019
        const price = 9999
        const imageUrl = 'anyUrl'
        
        const wrapper = vehicleCardBuilder().withProps({ brand, model, year, price, imageUrl }).build()

        expect(wrapper.element).toMatchSnapshot()
    })

    function vehicleCardBuilder () {
        const stubs = { 'v-img': ImageStub, 'v-card': true, 'v-card-title': true }
        return wrapperBuilderFactory({ component: VehicleCard, stubs })
    }
})