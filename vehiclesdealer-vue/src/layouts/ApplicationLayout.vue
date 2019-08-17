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
          v-for="(option, index) in drawerOptions"
          :key="index"
          class="option"
          @click="onHomePage"
        >
          <v-list-tile-content>
            <v-list-tile-title class="option-title">
              {{ option.title }}
            </v-list-tile-title>
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
  props: {
    drawerOptions: { type: Array, required: true }
  },
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
