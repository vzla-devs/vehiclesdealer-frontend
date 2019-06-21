<template>
<div>
  <div id="vehicles-view">
    <h1 class="title">Vehículos</h1>
    <vehicles-container />
  </div>
</div>
</template>

<script>
import VehiclesContainer from '@/components/VehiclesContainer'

export default {
  components: {
    VehiclesContainer
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
