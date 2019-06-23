<template>
  <v-alert v-show="displayError" class="error-banner" :value="true" dismissible type="error">
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
