<template>
  <div>
    <grid-layout v-if="thereAreVehicles">
      <card
        v-for="(vehicle, index) in vehicles"
        :key="index"
        :title="vehicleDescription(vehicle)"
        :price="vehicle.price"
        :image="vehicle.imageUrl"
      />
    </grid-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Getter } from '@/store/getters/types'
import { Action } from '@/store/actions/types'
import GridLayout from '@/layouts/GridLayout'
import Card from '@/components/Card'

export default {
  components: {
    GridLayout,
    Card
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
    }
  }
}
</script>
