<template>
  <v-alert class="error-banner red" :value="true" dismissible type="error">
    {{ message }}
  </v-alert>
</template>

<script>
export default {
  props: {
    message: String
  }
}
</script>

<style>
.error-banner {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
