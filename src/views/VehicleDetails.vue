<template>
  <vehicle-details-container :id="id" />
</template>

<script>
import VehicleDetailsContainer from '@/components/VehicleDetailsContainer.vue'

export default {
  components: {
    VehicleDetailsContainer
  },
  props: {
    id: { type: String, required: true }
  }
}
</script>
