<template>
  <application-layout
    :drawer-options="drawerOptions"
    @onHomePage="onNavigate(homeRoute)"
    @onVehiclesPage="onNavigate(vehiclesRoute)"
  >
    <router-view id="content" />
    <error-banner
      v-if="showError"
      class="error-message"
      :message="errorMessage"
      @onClose="onCloseErrorMessage"
    />
  </application-layout>
</template>

<script>
import { HOME_ROUTE, VEHICLES_ROUTE } from '@/constants/routes'
import { ERROR_MESSAGE } from '@/store/getters/getterTypes'
import { CLEAR_MESSAGE } from '@/store/actions/actionTypes'
import { mapGetters, mapActions } from 'vuex'
import { MESSAGE_TYPES } from '@/constants/enums'
import ErrorBanner from '@/components/basic/ErrorBanner'
import ApplicationLayout from '@/layouts/ApplicationLayout'

export default {
  components: {
    ApplicationLayout,
    ErrorBanner
  },
  data: () => ({
    drawerOptions: [
      { title: 'Inicio', event: 'onHomePage' },
      { title: 'Vehículos', event: 'onVehiclesPage' }
    ]
  }),
  computed: {
    ...mapGetters({
      error: ERROR_MESSAGE
    }),
    errorMessage () {
      return this.error.message
    },
    showError () {
      return this.error.show
    },
    homeRoute () {
      return HOME_ROUTE
    },
    vehiclesRoute () {
      return VEHICLES_ROUTE
    }
  },
  methods: {
    ...mapActions({
      clearMessage: CLEAR_MESSAGE
    }),
    onCloseErrorMessage () {
      this.clearMessage(MESSAGE_TYPES.ERROR)
    },
    onNavigate (route) {
      this.$router.push(route)
    }
  }
}
</script>
