<template>
  <h1>Estos son los detalles del vehículo {{ id }} :)</h1>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true }
  }
}
</script>

<style>

</style>
