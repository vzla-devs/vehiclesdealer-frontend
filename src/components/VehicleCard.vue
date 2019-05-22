<template>
  <div class="card"></div>
</template>

<script>
export default {
  props: {
    brand: String,
    model: String,
    year: String,
    imageUrl: String
  }
}
</script>


<style lang="scss" scoped>
.card {
  border-radius: $border-radius;
  background-color: lightgray;
}
</style>
