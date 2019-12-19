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
import { Getter } from '@/store/getters/types'
import { Action } from '@/store/actions/types'
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
      vehicles: Getter.AVAILABLE_VEHICLES,
      isLoading: Getter.IS_LOADING
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
      getVehicles: Action.GET_VEHICLES
    })
  }
}
</script>
