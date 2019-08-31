<template>
  <page-layout>
    <h1>Vehículos</h1>
    <vehicles-container />
  </page-layout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout'
import VehiclesContainer from '@/components/VehiclesContainer'

export default {
  components: {
    VehiclesContainer,
    PageLayout
  }
}
</script>
