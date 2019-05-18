<template>
  <div class="vehicles">
    <h1>Vehículos</h1>
    <grid>
      <card/>
      <card/>
      <card/>
      <card/>
      <card/>
      <card/>
      <card/>
      <card/>
      <card/>
      <card/>
      <card/>
      <card/>
      <card/>
      <card/>
      <card/>
    </grid>
  </div>
</template>
<script>
import Grid from '@/components/Grid'
import Card from '@/components/Card'
export default {
  name: 'Vehicles',
  components: {
    Grid,
    Card
  }
}
</script>
