import { componentBuilder } from '@tests/helpers/builderHelpers'
import PageLayout from '@/layouts/PageLayout.vue'
import { HOME_ROUTE, VEHICLES_ROUTE } from '@/constants/routes'

describe('ApplicationLayout.vue', () => {
  it('renders the drawer options correctly', () => {
    const drawerOptions = [
      { title: 'first option', route: 'first route' },
      { title: 'second option', route: 'second route' }
    ]

    const wrapper = aPageLayout().withData({ drawerOptions }).build()

    expect(wrapper.findAll('.option').length).toBe(2)
    const expectedOptions = wrapper.findAll('.option')
    expect(expectedOptions.at(0).find('.option-title').text()).toBe(drawerOptions[0].title)
    expect(expectedOptions.at(1).find('.option-title').text()).toBe(drawerOptions[1].title)
  })

  it('navigates to a route when the corresponding option is clicked', () => {
    const drawerOptions = [
      { title: 'home option', route: HOME_ROUTE },
      { title: 'vehicles option', route: VEHICLES_ROUTE }
    ]
    const router = { push: jest.fn() }
    const wrapper = aPageLayout().withRouter(router).withData({ drawerOptions }).build()

    const options = wrapper.findAll('.option')
    options.at(1).vm.$emit('click')

    expect(router.push).toHaveBeenCalledWith(VEHICLES_ROUTE)
  })

  function aPageLayout () {
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
    return componentBuilder(PageLayout).withStubs(stubs).withRouter()
  }
})
