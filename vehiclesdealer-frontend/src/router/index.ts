import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import VehiclesPage from '@/pages/VehiclesPage.vue'
import { ApplicationRoute } from '@/constants/routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: ApplicationRoute.HOME_ROUTE,
        name: 'home',
        component: VehiclesPage
      },
      {
        path: ApplicationRoute.ABOUT_ROUTE,
        name: 'about',
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
