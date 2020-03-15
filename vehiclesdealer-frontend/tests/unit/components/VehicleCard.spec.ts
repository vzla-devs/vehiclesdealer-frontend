import { AComponent } from '@tests/builders/componentBuilder'
import VehicleCard from '@/components/VehicleCard.vue'

describe('VehicleCard.vue', () => {
  it('should show the vehicle card content correctly', () => {
    const props = {
      image: 'anyImageURL',
      title: 'anyTitle',
      price: 5000
    }

    const wrapper = AVehicleCard().withProps(props).build()

    expect(wrapper.find('.description').text()).toBe('ANYTITLE')
    expect(wrapper.find('.price').text()).toBe('5000 €')
  })

  it('should emit an event when the card is clicked', () => {
    const wrapper = AVehicleCard().build()

    wrapper.find('v-card-stub').vm.$emit('click')

    expect(wrapper.emitted().onClick).toBeTruthy()
  })

  function AVehicleCard (): AComponent {
    const defaultProps = {
      image: 'anyDefaultImage',
      title: 'anyDefaultTitle',
      price: 9999
    }
    const stubs = { 'v-img': true, 'v-card': true, 'v-card-title': true }
    return new AComponent(VehicleCard).withStubs(stubs).withProps(defaultProps)
  }
})
