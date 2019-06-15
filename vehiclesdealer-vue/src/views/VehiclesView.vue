<template>
<div>
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
    <div v-else id="no-vehicles">No hay vehículos disponibles</div>
  </div>
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
h1 {
  padding-top: $small-space;
  padding-bottom: $small-space;
}

#no-vehicles {
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: $medium-breakpoint) {
  h1 {
    padding-top: $medium-space;
    padding-bottom: $medium-space;
  }
}
</style>
