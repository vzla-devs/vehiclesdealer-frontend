<template>
  <div id="app">
    <div id="nav">
      <router-link
        class="home-link"
        :to="homeRoute"
      >
        Inicio
      </router-link> |
      <router-link
        class="vehicles-link"
        :to="vehiclesRoute"
      >
        Vehículos
      </router-link>
    </div>
    <router-view id="content" />
    <error-banner
      v-if="showError"
      class="error-message"
      :message="errorMessage"
      @onClose="onCloseErrorMessage"
    />
  </div>
</template>

<script>
import { HOME_ROUTE, VEHICLES_ROUTE } from '@/constants/routes'
import { ERROR_MESSAGE } from '@/store/getters/getterTypes'
import { CLEAR_MESSAGE, SHOW_MESSAGE } from '@/store/actions/actionTypes'
import { mapGetters, mapActions } from 'vuex'
import messagesTypes from '@/enums/messagesTypes'
import ErrorBanner from '@/components/basic/ErrorBanner'

export default {
  components: {
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
      this.clearMessage(messagesTypes().error)
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
#nav {
  text-align: center;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
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
