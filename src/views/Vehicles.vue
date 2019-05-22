<template>
  <div>
    <h1>Vehículos</h1>
    <grid>
      <vehicle-card v-for="(vehicle, index) in vehicles" :key="index"
        class="vehicle"
        :brand="vehicle.brand"
        :model="vehicle.model"
        :year="vehicle.year"
        :price="vehicle.price"
        :imageUrl="vehicle.imageUrl"
      />
    </grid>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Grid from '@/components/Grid'
import VehicleCard from '@/components/VehicleCard'
export default {
  components: {
    Grid,
    VehicleCard
  },
  computed: {
    ...mapState({ vehicles: state => state.vehicles })
  }
}
</script>
