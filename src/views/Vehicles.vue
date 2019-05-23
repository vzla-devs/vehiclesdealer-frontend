<template>
  <div class="vehicles-container">
    <h1>Vehículos</h1>
    <grid-layout>
      <vehicle-card v-for="(vehicle, index) in vehicles" :key="index"
        class="vehicle"
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
    ...mapState({ vehicles: state => state.vehicles })
  }
}
</script>

<style lang="scss" scoped>
.vehicles-container {
  height: 100%;
  background-color: $light-gray;
  padding-top: $small-space;
}

@media (min-width: $medium-breakpoint) {
  .vehicles-container {
    padding-top: $medium-space;
  }
}
</style>
