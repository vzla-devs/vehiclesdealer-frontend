<template>
  <div>
    <div class="no-data">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: { type: String, required: true }
  }
}
</script>

<style scoped>
.no-data {
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
