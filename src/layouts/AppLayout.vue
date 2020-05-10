<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="primary--text text--accent-4"
        >
          <v-list-item
            v-for="(option, index) in drawerOptions"
            :key="index"
            class="option"
            @click="onNavigate(option.routeName)"
          >
            <v-list-item-icon>
              <v-icon>{{ option.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ option.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = true" />
      <v-toolbar-title>VehiclesDealer</v-toolbar-title>
      <v-progress-linear
        :active="isLoading"
        indeterminate
        absolute
        bottom
      />
    </v-app-bar>
    <v-content>
      <v-container
        fluid
        @click="drawer = false"
      >
        <transition
          name="slide-fade"
          mode="out-in"
        >
          <router-view />
        </transition>
      </v-container>
    </v-content>
    <v-footer
      color="primary"
      app
      absolute
    >
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import { ROUTES } from '@/constants/applicationRoutes.ts'
import { mapGetters } from 'vuex'
import { Getter } from '@/store/getters/types'

export default {
  data: () => ({
    drawer: false,
    drawerOptions: [
      { icon: 'mdi-home', title: 'Inicio', routeName: ROUTES.VEHICLES },
      { icon: 'mdi-help-box', title: 'Acerca de', routeName: ROUTES.ABOUT }
    ]
  }),
  computed: {
    ...mapGetters({
      isLoading: Getter.IS_LOADING
    })
  },
  methods: {
    onNavigate (name) {
      if (this.$route.name !== name) {
        this.$router.push({ name })
      }
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
    margin-bottom: $small-space;
  }
}

.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

@media (min-width: $medium-breakpoint) {
  h1 {
    margin-top: $medium-space;
    margin-bottom: $medium-space;
  }
}
</style>
