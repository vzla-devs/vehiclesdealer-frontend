<template>
  <div id="vehicles-container">
    <h1>Vehículos</h1>
    <grid-layout v-if="hasVehices">
      <vehicle-card v-for="(vehicle, index) in vehicles" :key="index"
        :brand="vehicle.brand"
        :model="vehicle.model"
        :year="vehicle.year"
        :price="vehicle.price"
        :imageUrl="vehicle.imageUrl"
      />
    </grid-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import GridLayout from '@/components/GridLayout'
import VehicleCard from '@/components/VehicleCard'

export default {
  components: {
    GridLayout,
    VehicleCard
  },
  computed: {
    ...mapState({ vehicles: state => state.vehicles }),
    hasVehices () {
      return this.vehicles.length > 0
    }
  }
}
</script>

<style lang="scss" scoped>
#vehicles-container {
  background-color: $light-gray;
  padding-top: $small-space;
}

@media (min-width: $medium-breakpoint) {
  #vehicles-container {
    padding-top: $medium-space;
  }
}
</style>
