<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-item
          v-for="(option, index) in drawerOptions"
          :key="index"
          class="option"
          @click="onNavigate(option.routeName)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ option.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>VehiclesDealer</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { ApplicationRouteName } from '@/constants/routeNames.ts'

export default {
  data: () => ({
    drawer: false,
    drawerOptions: [
      { title: 'Inicio', routeName: ApplicationRouteName.HOME },
      { title: 'Acerca de', routeName: ApplicationRouteName.ABOUT }
    ]
  }),
  methods: {
    onNavigate (name) {
      this.$router.push({ name })
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
    margin-top: $small-space;
  }
}

@media (min-width: $medium-breakpoint) {
  h1 {
    margin-top: $medium-space;
  }
}
</style>
