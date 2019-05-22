<template>
  <v-card>
    <v-img :src="imageUrl" />
    <v-card-title primary-title>
      <div>
        <h3 class="headline">{{ brand }}</h3>
        <div> {{ year }} </div>
      </div>
    </v-card-title>
  </v-card>
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
