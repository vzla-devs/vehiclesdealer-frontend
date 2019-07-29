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
  </div>
</template>

<script>
import { HOME_ROUTE, VEHICLES_ROUTE } from './constants/routes'
export default {
  computed: {
    homeRoute () {
      return HOME_ROUTE
    },
    vehiclesRoute () {
      return VEHICLES_ROUTE
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
