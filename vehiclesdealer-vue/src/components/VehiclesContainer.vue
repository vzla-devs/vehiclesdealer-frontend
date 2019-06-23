<template>
<div>
  <grid-layout v-if="isDoneLoading && hasVehices">
    <vehicle-card v-for="(vehicle, index) in vehicles" :key="index"
      :brand="vehicle.brand"
      :model="vehicle.model"
      :year="vehicle.year"
      :price="vehicle.price"
      :imageUrl="vehicle.imageUrl"
    />
  </grid-layout>
  <no-data v-if="isDoneLoading && !hasVehices" message="No hay vehículos disponibles" />
  <error-banner v-show="showError" message="Ha ocurrido un error" />
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { GET_AVAILABLE_VEHICLES } from '@/store/getters/gettersTypes'
import { GET_VEHICLES } from '@/store/actions/actionsTypes'
import GridLayout from '@/components/basic/GridLayout'
import VehicleCard from '@/components/VehicleCard'
import NoData from '@/components/basic/NoData'
import ErrorBanner from '@/components/basic/ErrorBanner'

export default {
  components: {
    GridLayout,
    VehicleCard,
    NoData,
    ErrorBanner
  },
  computed: {
    ...mapGetters({ vehicles: GET_AVAILABLE_VEHICLES }),
    hasVehices () {
      return this.vehicles.length > 0
    }
  },
  data () {
    return {
      showError: false,
      isDoneLoading: false
    }
  },
  async created () {
    try {
      await this.getVehicles()
    } catch (error) {
      this.showError = true
    }
    this.isDoneLoading = true
  },
  methods: {
    ...mapActions({ getVehicles: GET_VEHICLES })
  }
}
</script>
