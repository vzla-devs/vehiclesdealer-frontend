import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import VehiclesList from '@/views/VehiclesList.vue'
import VehicleDetails from '@/views/VehicleDetails.vue'
import { ApplicationRouteName } from '@/constants/routeNames'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: '/',
        name: ApplicationRouteName.HOME,
        redirect: {
          name: ApplicationRouteName.VEHICLES
        }
      },
      {
        path: '/vehiculo/:vehicleId',
        name: ApplicationRouteName.VEHICLE,
        component: VehicleDetails
      },
      {
        path: '/vehiculos',
        name: ApplicationRouteName.VEHICLES,
        component: VehiclesList
      },
      {
        path: '/acerca-de',
        name: ApplicationRouteName.ABOUT,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
