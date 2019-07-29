<template>
  <v-card
    :hover="true"
    class="card"
  >
    <v-img :src="imageUrl" />
    <v-card-title primary-title>
      <div class="description-container">
        <h3 class="headline description">
          {{ formattedDescription }}
        </h3>
        <div class="price">
          {{ formattedPrice }}
        </div>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true }
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
  text-transform: uppercase;
  text-align: justify;
  font-size: 24px;
  font-weight: 400;
}
.price {
  text-align: end;
  font-size: 16px;
  font-weight: 500;
}
</style>
