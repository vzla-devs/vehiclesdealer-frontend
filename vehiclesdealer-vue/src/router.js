import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './pages/HomePage.vue'
import VehiclesPage from './pages/VehiclesPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/vehiculos',
      name: 'vehicles',
      component: VehiclesPage
    }
  ]
})
