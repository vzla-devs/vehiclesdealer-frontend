<template>
<div>
  <grid-layout v-if="hasVehices">
    <vehicle-card v-for="(vehicle, index) in vehicles" :key="index"
      :brand="vehicle.brand"
      :model="vehicle.model"
      :year="vehicle.year"
      :price="vehicle.price"
      :imageUrl="vehicle.imageUrl"
    />
  </grid-layout>
  <no-data v-else message="No hay vehículos disponibles" />
  <v-alert v-if="displayError" :value="true" class="error-alert" dismissible type="error">
    Ha ocurrido un error
  </v-alert>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { GET_AVAILABLE_VEHICLES } from '@/store/getters/gettersTypes'
import { GET_VEHICLES } from '@/store/actions/actionsTypes'
import GridLayout from '@/components/basic/GridLayout'
import VehicleCard from '@/components/VehicleCard'
import NoData from '@/components/basic/NoData'

export default {
  components: {
    GridLayout,
    VehicleCard,
    NoData
  },
  computed: {
    ...mapGetters({ vehicles: GET_AVAILABLE_VEHICLES }),
    hasVehices () {
      return this.vehicles.length > 0
    }
  },
  data () {
    return {
      displayError: false
    }
  },
  async created () {
    try {
      await this.getVehicles()
    } catch (error) {
      this.displayError = true
    }
  },
  methods: {
    ...mapActions({ getVehicles: GET_VEHICLES })
  }
}
</script>
