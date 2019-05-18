<template>
  <div>
    <h1>Vehículos</h1>
    <grid>
      <card v-for="(vehicle, index) in vehicles" :key="index" />
    </grid>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Grid from '@/components/Grid'
import Card from '@/components/Card'
export default {
  name: 'Vehicles',
  components: {
    Grid,
    Card
  },
  computed: {
    ...mapState({ vehicles: state => state.vehicles })
  }
}
</script>
