import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import VehiclesPage from '@/pages/VehiclesPage.vue'
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
        component: VehiclesPage
      },
      {
        path: '/acerca-de',
        name: ApplicationRouteName.ABOUT,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/pages/AboutPage.vue')
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
