<template>
  <div>
    <v-alert
      class="error-banner red"
      :value="true"
      dismissible
      type="error"
      @input="$emit('onClose')"
    >
      {{ message }}
    </v-alert>
  </div>
</template>

<script>
export default {
  props: {
    message: { type: String, required: true }
  }
}
</script>
