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
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { GET_VEHICLES } from '@/store/getters/gettersTypes'
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
    ...mapGetters({ vehicles: GET_VEHICLES }),
    hasVehices () {
      return this.vehicles.length > 0
    }
  }
}
</script>
