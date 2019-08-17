<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>
              <h1>Opciones</h1>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider />
      <v-list dense>
        <v-list-tile
          class="home-option"
          @click="onHomePage"
        >
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Inicio</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          class="vehicles-option"
          @click="onVehiclesPage"
        >
          <v-list-tile-action>
            <v-icon>directions_car</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Vehículos</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      fixed
      app
      color="primary"
      dark
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>VehiclesDealer</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <slot />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  }),
  methods: {
    onHomePage () {
      this.$emit('onHomePage')
    },
    onVehiclesPage () {
      this.$emit('onVehiclesPage')
    }
  }
}
</script>
