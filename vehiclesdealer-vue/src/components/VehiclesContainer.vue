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
    <error-banner
      v-show="showError"
      message="Ha ocurrido un error"
      @onClose="onCloseErrorBanner"
    />
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
  data () {
    return {
      showError: false,
      isDoneLoading: false
    }
  },
  computed: {
    ...mapGetters({ vehicles: GET_AVAILABLE_VEHICLES }),
    hasVehices () {
      return this.vehicles.length > 0
    },
    thereAreVehicles () {
      return this.isDoneLoading && this.hasVehices
    },
    thereAreNoVehicles () {
      return this.isDoneLoading && !this.hasVehices
    }
  },
  created () {
    this.getVehicles()
      .catch(() => { this.showError = true })
      .finally(() => { this.isDoneLoading = true })
  },
  methods: {
    ...mapActions({ getVehicles: GET_VEHICLES }),
    onCloseErrorBanner () {
      this.showError = false
    }
  }
}
</script>
