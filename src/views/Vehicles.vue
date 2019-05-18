<template>
  <div class="vehicles">
    <h1>Vehículos</h1>
    <div class="grid">
      <card/>
      <card/>
      <card/>
      <card/>
      <card/>
      <card/>
      <card/>
      <card/>
    </div>
  </div>
</template>
<script>
import Card from '@/components/Card'
export default {
  name: 'Vehicles',
  components: {
    Card
  }
}
</script>
<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(200px, auto);
  grid-gap: $gap;
  margin: 0 $gap;
}
</style>
