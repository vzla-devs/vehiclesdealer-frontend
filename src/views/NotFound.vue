<template>
  <div class="not-found-container">
    <h1>No hemos encontrado lo que buscas :(</h1>
    <v-btn
      :to="{ name: 'home' }"
      color="primary"
      class="back-button"
    >
      Regresar
    </v-btn>
  </div>
</template>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.back-button {
  max-width: fit-content;
}
</style>
