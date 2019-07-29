<template>
  <div>
    <v-alert
      class="error-banner red"
      :value="true"
      dismissible
      type="error"
      @input="onClose"
    >
      {{ message }}
    </v-alert>
  </div>
</template>

<script>
export default {
  props: {
    message: { type: String, required: true }
  },
  methods: {
    onClose () {
      this.$emit('onClose')
    }
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
