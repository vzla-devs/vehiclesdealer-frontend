import { wrapperBuilderFactory } from '@tests/helpers/factoryHelpers'
import ApplicationLayout from '@/layouts/ApplicationLayout'

describe('ApplicationLayout.vue', () => {
  const stubs = ['v-app', 'v-navigation-drawer', 'v-divider', 'v-list', 'v-list-tile', 'v-list-tile-content', 'v-toolbar', 'v-toolbar-title', 'v-toolbar-side-icon', 'v-content', 'v-list-tile-title', 'v-list-title']
  it('should render the drawer options correctly', () => {
    const drawerOptions = [{ title: 'first option', event: 'firstEvent' }, { title: 'second option', event: 'secondEvent' }]

    const wrapper = wrapperBuilder().withStubs(stubs).withProps({ drawerOptions }).build()

    expect(wrapper.findAll('.option').length).toBe(2)
    const expectedOptions = wrapper.findAll('.option')
    expect(expectedOptions.at(0).find('.option-title').text()).toBe(drawerOptions[0].title)
    expect(expectedOptions.at(1).find('.option-title').text()).toBe(drawerOptions[1].title)
  })

  function wrapperBuilder () {
    return wrapperBuilderFactory({ component: ApplicationLayout })
  }
})
