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

<style lang="scss" scoped>
#vehicles-view {
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
  grid-gap: $small-space;
}

@media (min-width: $medium-breakpoint) {
  #vehicles-view-container {
    grid-gap: $medium-space;
  }
}
</style>
