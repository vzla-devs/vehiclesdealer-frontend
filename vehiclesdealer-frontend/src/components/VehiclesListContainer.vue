<template>
  <grid-layout v-if="thereAreVehicles">
    <vehicle-card
      v-for="(vehicle, index) in vehicles"
      :key="index"
      :image="vehicle.featuredImage"
      :description="vehicleDescription(vehicle)"
      :price="vehicle.price"
      @onClick="onVehicleClicked(vehicle.id)"
    />
  </grid-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Getter } from '@/store/getters/types'
import { Action } from '@/store/actions/types'
import GridLayout from '@/layouts/GridLayout'
import VehicleCard from '@/components/VehicleCard'
import { ROUTES } from '@/constants/applicationRoutes'

export default {
  components: {
    GridLayout,
    VehicleCard
  },
  computed: {
    ...mapGetters({
      vehicles: Getter.AVAILABLE_VEHICLES
    }),
    thereAreVehicles () {
      return this.vehicles.length > 0
    }
  },
  created () {
    this.getVehicles()
  },
  methods: {
    ...mapActions({
      getVehicles: Action.GET_VEHICLES
    }),
    vehicleDescription (vehicle) {
      return `${vehicle.brand} ${vehicle.model} - ${vehicle.year}`
    },
    onVehicleClicked (id) {
      this.$router.push({ name: ROUTES.VEHICLE, params: { id } })
    }
  }
}
</script>
