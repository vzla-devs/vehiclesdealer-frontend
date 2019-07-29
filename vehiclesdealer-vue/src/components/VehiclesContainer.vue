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
import { AVAILABLE_VEHICLES } from '@/store/getters/gettersTypes'
import { GET_VEHICLES, SHOW_MESSAGE } from '@/store/actions/actionsTypes'
import GridLayout from '@/components/basic/GridLayout'
import VehicleCard from '@/components/VehicleCard'
import NoData from '@/components/basic/NoData'
import MessagesTypes from '@/enums/MessagesTypes'

export default {
  components: {
    GridLayout,
    VehicleCard,
    NoData
  },
  data () {
    return {
      isDoneLoading: false
    }
  },
  computed: {
    ...mapGetters({ vehicles: AVAILABLE_VEHICLES }),
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
      .catch(this.showErrorMessage)
      .finally(() => { this.isDoneLoading = true })
  },
  methods: {
    ...mapActions({
      getVehicles: GET_VEHICLES,
      showMessage: SHOW_MESSAGE
    }),
    showErrorMessage () {
      const type = MessagesTypes().error
      const message = 'Ha ocurrido un error'
      this.showMessage({ type, message })
    }
  }
}
</script>
