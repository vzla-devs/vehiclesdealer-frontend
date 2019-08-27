import { componentBuilder } from '@tests/helpers/builderHelpers'
import ApplicationLayout from '@/layouts/ApplicationLayout.vue'

describe('ApplicationLayout.vue', () => {
  it('renders the drawer options correctly', () => {
    const drawerOptions = [
      { title: 'first option', event: 'firstEvent' },
      { title: 'second option', event: 'secondEvent' }
    ]

    const wrapper = anApplicationLayout().withProps({ drawerOptions }).build()

    expect(wrapper.findAll('.option').length).toBe(2)
    const expectedOptions = wrapper.findAll('.option')
    expect(expectedOptions.at(0).find('.option-title').text()).toBe(drawerOptions[0].title)
    expect(expectedOptions.at(1).find('.option-title').text()).toBe(drawerOptions[1].title)
  })

  it('emits the corresponding event for the option that is clicked', () => {
    const drawerOptions = [
      { title: 'first option', event: 'firstEvent' },
      { title: 'second option', event: 'secondEvent' }
    ]
    const wrapper = anApplicationLayout().withProps({ drawerOptions }).build()

    wrapper.findAll('.option').at(1).vm.$emit('click')

    expect(wrapper.emitted().secondEvent).toBeTruthy()
  })

  function anApplicationLayout () {
    const stubs = {
      'v-app': true,
      'v-navigation-drawer': true,
      'v-divider': true,
      'v-list': true,
      'v-list-tile': true,
      'v-list-tile-content': true,
      'v-toolbar': true,
      'v-toolbar-title': true,
      'v-toolbar-side-icon': true,
      'v-content': true,
      'v-list-tile-title': true,
      'v-list-title': true
    }
    return componentBuilder(ApplicationLayout).withStubs(stubs)
  }
})
