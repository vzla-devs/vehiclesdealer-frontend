<template>
  <v-card :hover="true" class="card">
    <v-img :src="imageUrl" />
    <v-card-title primary-title>
      <div class="description-container">
        <h3 class="headline description">{{ formattedDescription }}</h3>
        <div class="price"> {{ formattedPrice }} </div>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    brand: String,
    model: String,
    year: Number,
    price: Number,
    imageUrl: String
  },
  computed: {
    formattedDescription () { return `${this.brand} ${this.model} - ${this.year}` },
    formattedPrice () { return `${this.price} €` }
  }
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: $border-radius;
}
.description-container {
  width: 100%;
}
.description {
  font: 400 24px roboto;
  text-transform: uppercase;
  text-align: justify;
}
.price {
  text-align: end;
  font: 500 16px roboto;
}
</style>
