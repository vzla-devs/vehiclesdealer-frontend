<template>
  <application-layout
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
import { CLEAR_MESSAGE, SHOW_MESSAGE } from '@/store/actions/actionTypes'
import { mapGetters, mapActions } from 'vuex'
import MessageTypes from '@/enums/MessageTypes'
import ErrorBanner from '@/components/basic/ErrorBanner'
import ApplicationLayout from '@/layouts/ApplicationLayout'

export default {
  components: {
    ApplicationLayout,
    ErrorBanner
  },
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
      clearMessage: CLEAR_MESSAGE,
      showMessage: SHOW_MESSAGE
    }),
    onCloseErrorMessage () {
      this.clearMessage(MessageTypes.error)
    },
    onNavigate (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: roboto, sans-serif;
  color: #2c3e50;
  h1 {
    text-align: center;
  }
}
#content {
  padding-top: $small-space;
  height: 100%;
}

@media (min-width: $medium-breakpoint) {
  #content {
    padding-top: $medium-space;
  }
}
</style>
