<template>
  <div>
    <grid-layout v-if="thereAreVehicles">
      <vehicle-card
        v-for="(vehicle, index) in vehicles"
        :key="index"
        :brand="vehicle.brand"
        :model="vehicle.model"
        :year="vehicle.year"
        :price="vehicle.price"
        :image-url="vehicle.imageUrl"
      />
    </grid-layout>
    <no-data
      v-if="thereAreNoVehicles"
      message="No hay vehículos disponibles"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { AVAILABLE_VEHICLES, LOADING_VEHICLES } from '@/store/getters/getterTypes'
import { GET_VEHICLES } from '@/store/actions/actionTypes'
import GridLayout from '@/layouts/GridLayout'
import VehicleCard from '@/components/VehicleCard'
import NoData from '@/components/basic/NoData'

export default {
  components: {
    GridLayout,
    VehicleCard,
    NoData
  },
  computed: {
    ...mapGetters({
      vehicles: AVAILABLE_VEHICLES,
      isLoading: LOADING_VEHICLES
    }),
    hasVehices () {
      return this.vehicles.length > 0
    },
    thereAreVehicles () {
      return !this.isLoading && this.hasVehices
    },
    thereAreNoVehicles () {
      return !this.isLoading && !this.hasVehices
    }
  },
  created () {
    this.getVehicles()
  },
  methods: {
    ...mapActions({
      getVehicles: GET_VEHICLES
    })
  }
}
</script>
