import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import VehiclesList from '@/views/VehiclesList.vue'
import VehicleDetails from '@/views/VehicleDetails.vue'
import NotFound from '@/views/NotFound.vue'
import { ROUTES } from '@/constants/applicationRoutes'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: '/',
        name: ROUTES.HOME,
        redirect: {
          name: ROUTES.VEHICLES
        }
      },
      {
        path: '/vehiculo/:id',
        name: ROUTES.VEHICLE,
        component: VehicleDetails,
        props: true
      },
      {
        path: '/vehiculos',
        name: ROUTES.VEHICLES,
        component: VehiclesList
      },
      {
        path: '/acerca-de',
        name: ROUTES.ABOUT,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
      },
      {
        path: '*',
        component: NotFound
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
