<template>
  <v-card
    hover
    class="card"
  >
    <v-img :src="image" />
    <v-card-title primary-title>
      <div class="description-container">
        <h3 class="headline description">
          {{ formattedTitle }}
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
    title: { type: String, required: true },
    price: { type: Number, default: undefined },
    image: { type: String, required: true }
  },
  computed: {
    formattedTitle () { return this.title.toUpperCase() },
    formattedPrice () { return `${this.price} €` }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: grid;
}
.description-container {
  width: 100%;
}
.description {
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
