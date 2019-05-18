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
  grid-auto-rows: 400px;
  grid-gap: $gap;
  margin: 0 $gap;
}

@media (min-width: 767px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1264px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1904px) {
  .grid {
    justify-content: center;
    grid-template-columns: repeat(4, minmax(400px, 540px));
  }
}
</style>
